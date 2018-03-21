require 'date'
require 'fileutils'
require 'json'

TODO_FILE_PATH = './ruby/todo.txt'
Task = Struct.new(
  :name,
  :is_completed,
  :created,
  :updated
)

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
  Task.new(
    v["name"],
    v["is_completed"],
    v["created"],
    v["updated"]
  )
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
    printf "%2d: #{checkbox} #{task.name} [#{task.updated}]\n", i
  end
  rescue
    puts 'no tasks'
  end
when 'add'
  name = rest.join(' ').to_s
  now_str = DateTime.now.to_s
  new_task = Task.new(
    name,
    false,
    now_str,
    now_str
  )
  tasks.push(new_task)
  write_json(TODO_FILE_PATH, tasks)
when 'delete'
  id = rest[0].to_i
  tasks.delete_at(id)
  write_json(TODO_FILE_PATH, tasks)
when 'done'
  id = rest[0].to_i
  tasks[id].is_completed = true
  tasks[id].updated = DateTime.now.to_s
  write_json(TODO_FILE_PATH, tasks)
when 'progress'
  done_tasks = tasks.select {|t| t.is_completed == true}
  progress = (done_tasks.size.to_f / tasks.size * 100).round
  puts "#{done_tasks.size} / #{tasks.size}"
  puts "#{progress} %"
else
  puts 'no command'
end
