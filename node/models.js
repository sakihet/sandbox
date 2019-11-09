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
      tagIds = [],
      isClosed = false,
      id = uuidv4(),
      created = undefined,
      updated = undefined
    } = {}
  ) {
    super(created, updated)
    this.id = id
    this.name = name
    this.tagIds = tagIds
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

  addTag(tagId) {
    this.tagIds.push(tagId)
  }
}

class Tag extends Model {
  constructor (
    {
      name,
      id = uuidv4(),
      created = undefined,
      updated = undefined
    } = {}
  ) {
    super(created, updated)
    this.id = id
    this.name = name
  }
}

class Board extends Model {
  constructor (
    {
      name,
      tagId = undefined,
      id = uuidv4(),
      created = undefined,
      updated = undefined
    } = {}
  ) {
    super(created, updated)
    this.tagId = tagId
    this.id = id
    this.name = name
  }
}

let task1 = new Task(
  {
    name: 'task1'
  }
)
console.log(task1)
console.log(task1.toJson())

let tag1 = new Tag(
  {
    name: 'tag1'
  }
)
console.log(tag1)

task1.addTag(tag1.id)
console.log(task1)

let board1 = new Board(
  {
    name: 'board1',
    tagId: tag1.id
  }
)
console.log(board1)

