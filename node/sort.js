const items = [
  {
    id: 1,
    name: 'dog',
    createdAt: '2019-06-10T13:27:24.309Z'
  },
  {
    id: 2,
    name: 'cat',
    createdAt: '2019-06-03T13:27:24.309Z'
  },
  {
    id: 3,
    name: 'mouse',
    createdAt: '2019-06-01T13:27:24.309Z'
  }
]

console.log(items)
console.log('sort by id')
let key = 'id'
console.log(items.sort((a, b) => a[key] >= b[key]))
console.log(items.sort((a, b) => a[key] <= b[key]))
console.log('sort by name')
key = 'name'
console.log(items.sort((a, b) => a[key] >= b[key]))
console.log(items.sort((a, b) => a[key] <= b[key]))
console.log('sort by createdAt')
key = 'createdAt'
console.log(items.sort((a, b) => new Date(a[key]) >= new Date(b[key])))
console.log(items.sort((a, b) => new Date(a[key]) <= new Date(b[key])))
