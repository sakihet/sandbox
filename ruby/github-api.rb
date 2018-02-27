# https://developer.github.com/v3/

require 'net/http'
require 'json'

require 'pry'

BASE_URI = 'https://api.github.com'

def show_user_repo (username) 
  puts 'show user repo'
  repos_uri = "#{BASE_URI}/users/#{username}/repos"
  res = Net::HTTP.get(URI(repos_uri))
  res_json = JSON.parse(res)
  res_json.select { |repo| repo["fork"] == false }.map { |repo|
    puts repo["name"]
    puts repo["description"]
    puts repo["html_url"]
    puts repo["language"]
    puts "=="
  }
  # binding.pry
end

show_user_repo('sakihet')
