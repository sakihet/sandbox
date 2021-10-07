class ValidationError extends Error {}

class Person {
  constructor(
    {
      id,
      name,
      gender = null
    } = {}
  ) {
    if (id === undefined || name === undefined) {
      throw new ValidationError()
    }
    this.id = id
    this.name = name
    this.gender = gender
  }
  sayName () {
    console.log(this.name)
  }
}
const p1 = new Person({ id: 1, name: 'adam', gender: 'male' })
const obj = { id: 2, name: 'bob' }
const p2 = new Person(obj)
console.log(p1)
console.log(p2)

new Person(obj).sayName()
