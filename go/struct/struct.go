package main

import "fmt"

type Task struct {
	Name        string
	IsCompleted bool
}

func (t *Task) Println() {
	fmt.Println(t.Name, t.IsCompleted)
}

type Tasks []Task

func (ts *Tasks) Println() {
	for i := 0; i < len(*ts); i++ {
		fmt.Println((*ts)[i].Name, (*ts)[i].IsCompleted)
	}
}

func (ts *Tasks) Add(t Task) Tasks {
	return append(*ts, t)
}

func (ts *Tasks) Undones() (ret Tasks) {
	for _, t := range *ts {
		if t.IsCompleted == false {
			ret = append(ret, t)
		}
	}
	return
}

func main() {
	t := Task{"task 1", false}
	fmt.Println("Task#Println")
	t.Println()
	t2 := Task{"task 2", true}
	var tasks = Tasks{t, t2}
	fmt.Println("Tasks#Println")
	tasks.Println()
	t3 := Task{"task 3", false}
	tasks = tasks.Add(t3)
	fmt.Println("Tasks#Add, Tasks#Println")
	tasks.Println()
	fmt.Println("Tasks#Undones, Tasks#Println")
	undones := tasks.Undones()
	undones.Println()
}
