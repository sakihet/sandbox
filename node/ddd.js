// class
class Task {
  constructor(
    id,
    name,
    order = 0,
    isClosed = false,
    isStarred = false,
    createdAt = null,
    updatedAt = null
  ) {
    this.id = id
    this.name = name
    this.order = order
    this.isClosed = isClosed
    this.isStarred = isStarred
    const now = new Date().toISOString()
    this.createdAt = createdAt || now
    this.updatedAt = updatedAt || now
  }
  updateName (name) {
    this.name = name
    this.updatedAt = new Date().toISOString()
  }
  toggle () {
    this.isClosed = !this.isClosed
    this.updatedAt = new Date().toISOString()
  }
  toggleStar () {
    this.isStarred = !this.isStarred
    this.updatedAt = new Date().toISOString()
  }
}

// experiments
const date = '2021-09-23T13:44:20.346Z'
const t1 = new Task(
  1,
  'task 1',
  0,
  false,
  false,
  date,
  date
)
const t2 = new Task(
  2,
  'task 2'
)

// print instance
console.log(t1)
console.log(t2)

// print json
const json = JSON.stringify(t1) 
console.log(json)

// print object
const obj = JSON.parse(json)
console.log(obj)

// print instance
const t1a = new Task(
  obj.id,
  obj.name,
  obj.order,
  obj.isClosed,
  obj.isStarred,
  obj.createdAt,
  obj.updatedAt
)
t1a.toggle()
console.log(t1a)
