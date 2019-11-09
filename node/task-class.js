const uuidv4 = require('uuid/v4')

class Model {
  constructor (
    created = undefined,
    updated = undefined
  ) {
    let now = new Date()
    this.created = created || now
    this.updated = updated || now
  }

  toJson() {
    return JSON.stringify(this)
  }
}

class Task extends Model {
  constructor (
    {
      name,
      isClosed = false,
      id = uuidv4(),
      created = undefined,
      updated = undefined
    } = {}
  ) {
    super(created, updated)
    this.id = id
    this.name = name
    this.isClosed = isClosed
  }

  close() {
    this.isClosed = true
    this.updated = new Date()
  }

  updateName(name) {
    this.name = name
    this.updated = new Date()
  }
}

let t = new Task(
  {
    name: 'task1'
  }
)
console.log(t)
console.log(t.toJson())
t.close()
console.log(t)
t.updateName('new name')
console.log(t)

let taskObj = {
  id: 'ba6fb329-4b9f-4537-9ed7-d0d97fc7f64b',
  name: 'buy milk',
  isClosed: true,
  created: '2019-01-01T10:00:00.000Z',
  updated: '2019-02-01T10:00:00.000Z'
}

let t2 = new Task(taskObj)
console.log(t2)

let t3 = new Task({ number: 3 })
console.log(t3)
