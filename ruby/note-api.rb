require 'json'
require 'net/http'

BASE_URI = 'https://note.com/api/v2'

def get_users
  res = Net::HTTP.get(URI("#{BASE_URI}/users"))
  JSON.parse(res)
end

def get_notes
  res = Net::HTTP.get(URI("#{BASE_URI}/notes"))
  JSON.parse(res)
end

def get_categories
  res = Net::HTTP.get(URI("#{BASE_URI}/categories"))
  JSON.parse(res)
end

users = get_users()
p users

puts ''
notes = get_notes()
p notes

puts ''
categories = get_categories()
p categories
