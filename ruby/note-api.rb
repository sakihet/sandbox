require 'json'
require 'net/http'

BASE_URI = 'https://note.com/api/v2'

def get_users
  res = Net::HTTP.get(URI("#{BASE_URI}/users"))
  JSON.parse(res)
end

users = get_users()
p users
