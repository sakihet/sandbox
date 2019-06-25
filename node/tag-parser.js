let ary = [
  "tag1",
  " tag1 ",
  "tag1,tag2",
  " tag1, tag2",
  " tag1 ,, tag2",
  "tag1 tag2 "
]

ary.forEach(elem => {
  console.log(elem)
  let trimmed = elem.trim()
  let converted = trimmed.replace(' ', ',')
  console.log(`conv: ${converted}`)
  let out = converted.split(',')
  console.log(`out`)
  console.log(out)
  console.log(out.filter(n => n))
})
