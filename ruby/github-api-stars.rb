# https://developer.github.com/v3/

require 'net/http'
require 'json'

BASE_URI = 'https://api.github.com'

def get_stargazers_count(repo_path)
  uri = "#{BASE_URI}/repos/#{repo_path}"
  JSON.parse(Net::HTTP.get(URI(uri)))["stargazers_count"]
end

puts 'vue'
puts stars_vue = get_stargazers_count('vuejs/vue')
puts 'react'
puts stars_react = get_stargazers_count('facebook/react')
puts 'remainder'
puts stars_react - stars_vue
