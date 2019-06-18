require 'json'
require 'net/http'
require 'pry'

# api doc
# https://qiita.com/api/v2/docs

BASE_URI = 'https://qiita.com'
QIITA_ACCESS_TOKEN = ENV['QIITA_ACCESS_TOKEN']

# show tags
res = Net::HTTP.get(URI("#{BASE_URI}/api/v2/tags?sort=count"))
j = JSON.parse(res)
puts JSON.pretty_generate(j)

puts "=" * 80

# show items
res = Net::HTTP.get(URI("#{BASE_URI}/api/v2/items?query=tag%3Aruby"))
j = JSON.parse(res)
puts JSON.pretty_generate(j)
