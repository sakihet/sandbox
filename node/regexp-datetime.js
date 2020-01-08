console.log('regexp-datetime')

const texts = [
  '1400-1500 mtg',
  '191201 holiday',
  'test'
]

const regexDatetime = /^(?<startDatetime>\d{4})-(?<endDatetime>\d{4})(\s)(\w)/
const regexDate = /^(?<date>\d{6})(\s)(\w)/
const patterns = [
  regexDatetime,
  regexDate
]

const parse = (text) => {
  if (res = text.match(regexDatetime)) {
    return {
      type: 'datetime',
      startDatetime: res.groups.startDatetime,
      endDatetime: res.groups.endDatetime
    }
  } else if (res = text.match(regexDate)) {
    return {
      type: 'date',
      date: res.groups.date
    }
  } else {
    return {
      type: 'the others'
    }
  }
}

texts.forEach((text => {
  console.log(text)
  const result = parse(text)
  console.log(result)
}))
