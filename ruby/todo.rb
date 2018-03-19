require 'fileutils'
require 'json'

TODO_FILE_PATH = './ruby/todo.txt'

command = ARGV[0]
rest = ARGV[1..-1]
tasks = []

case command
when 'list'
  tasks = JSON.parse(File.read(TODO_FILE_PATH))
  tasks.each_with_index do |task, i|
    checkbox = "[ ]"
    checkbox = "[x]" if task["is_completed"]
    name = task["name"]
    puts "#{i}: #{checkbox} #{name}"
  end
when 'add'
  new_task = {
    is_completed: false,
    name: rest.join(' ').to_s
  }
  tasks = JSON.parse(File.read(TODO_FILE_PATH))
  File.open(TODO_FILE_PATH, 'w') do |f|
    f.write(tasks.push(new_task).to_json)
  end
when 'delete'
  id = rest[0].to_i
  tasks = JSON.parse(File.read(TODO_FILE_PATH))
  tasks.delete_at(id)
  File.open(TODO_FILE_PATH, 'w') do |f|
    f.write(tasks.to_json)
  end
when 'done'
  id = rest[0].to_i
  tasks = JSON.parse(File.read(TODO_FILE_PATH))
  tasks[id]["is_completed"] = true
  File.open(TODO_FILE_PATH, 'w') do |f|
    f.write(tasks.to_json)
  end
else
  puts 'no command'
end
