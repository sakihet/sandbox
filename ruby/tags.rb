str = "#tag1 #tag2 text #tag3"
ptn = /#.+?\s|#.+?$/

puts str
puts ''

tags = str.scan(ptn).map {|v| v.delete(' ')}
str = str.gsub(ptn, '')

puts str
puts ''
puts tags
