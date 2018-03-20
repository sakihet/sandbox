require 'fileutils'
require 'json'

TODO_FILE_PATH = './ruby/todo.txt'
Task = Struct.new(:name, :is_completed)
command = ARGV[0]
rest = ARGV[1..-1]
tasks = []

if !File.exists? TODO_FILE_PATH
  File.open(TODO_FILE_PATH, 'w')
end

def read_json(path)
  JSON.parse(File.read(path))
rescue
  []
end

tasks = read_json(TODO_FILE_PATH).map {|v|
  Task.new(v["name"], v["is_completed"])
}

def write_json(path, array_task)
  File.open(path, 'w') do |f|
    data = array_task.map {|v|
      v.to_h
    }.to_json
    f.write(data)
  end
end

case command
when 'list'
  begin
  tasks.each_with_index do |task, i|
    checkbox = task.is_completed ? "[x]" : "[ ]"
    puts "#{i}: #{checkbox} #{task.name}"
  end
  rescue
    puts 'no tasks'
  end
when 'add'
  name = rest.join(' ').to_s
  new_task = Task.new(name, false)
  tasks.push(new_task)
  write_json(TODO_FILE_PATH, tasks)
when 'delete'
  id = rest[0].to_i
  tasks.delete_at(id)
  write_json(TODO_FILE_PATH, tasks)
when 'done'
  id = rest[0].to_i
  tasks[id].is_completed = true
  write_json(TODO_FILE_PATH, tasks)
else
  puts 'no command'
end
