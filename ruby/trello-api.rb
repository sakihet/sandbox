require 'json'
require 'net/http'

BASE_URI = 'https://api.trello.com'
TRELLO_API_KEY = ENV['TRELLO_API_KEY']
TRELLO_API_TOKEN = ENV['TRELLO_API_TOKEN']

def get_boards ()
  res = Net::HTTP.get(URI("#{BASE_URI}/1/members/me/boards?key=#{TRELLO_API_KEY}&token=#{TRELLO_API_TOKEN}"))
  JSON.parse(res)
end

def get_lists (board_id)
  res = Net::HTTP.get(URI("#{BASE_URI}/1/boards/#{board_id}/lists?key=#{TRELLO_API_KEY}&token=#{TRELLO_API_TOKEN}"))
  JSON.parse(res)
end

def get_cards (list_id)
  res = Net::HTTP.get(URI("#{BASE_URI}/1/lists/#{list_id}/cards?key=#{TRELLO_API_KEY}&token=#{TRELLO_API_TOKEN}"))
  JSON.parse(res)
end

boards = get_boards()
puts boards[0]
puts ''
board_id = boards[0]["id"]
puts board_id

lists = get_lists(board_id)
puts lists
puts ''
list_id = lists[0]["id"]
puts list_id

cards = get_cards(list_id)
puts ''
cards.map {|v| puts v["name"]}
