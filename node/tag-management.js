let ary = [
  "tag1",
  " tag1 ",
  "tag1,tag2",
  " tag1, tag3",
  " tag2 ,, tag4",
  "tag5 tag2 "
]

let tags = []

tagParser = (str) => {
  return str.trim().replace(/ /g, ',').split(',').filter(e => e)
}

addTags = (names) => {
  let ids = []
  names.forEach(name => {
    if ( tags.filter(x => x.name === name).length >= 1 ) {
      console.log('same tag exists in tags')
      ids.push(tags.find(x => x.name === name).id)
    } else {
      console.log('new tag')
      let newId
      if (0 < tags.length) {
        newId = tags[tags.length - 1].id + 1
      } else {
        newId = 1
      }
      let tag = { id: newId, name: name }
      tags.push(tag)
      console.log('tags:')
      console.log(tags)
      ids.push(tag.id)
    }
  })
  console.log('ids:')
  console.log(ids)
}

ary.forEach(str => {
  console.log('input string: ', str)
  let tags = tagParser(str)
  console.log('parsed tags: ', tags)
  addTags(tags)
})

console.log('get names by ids')
let params = [1, 3]
let names = []
params.forEach(e => {
  if (tags.find(x => x.id === e)) {
    names.push(tags.find(x => x.id === e).name)
  }
})
console.log('names:')
console.log(names)
