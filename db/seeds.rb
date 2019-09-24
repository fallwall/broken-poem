# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Part.delete_all
Poem.delete_all

word_list = [
  ["Saturday"],
  ["autumn"],
  ["migration"],
  ["bright yellow"],
  ["someone"],
  ["great"],
  ["appetite"],
  ["dirt"],
  ["lava"],
  ["cat whisker"],
  ["sweet"],
  ["catcher"],
  ["train"],
  ["move"],
  ["Hawaiian"],
  ["hat"],
  ["hide"],
]

word_list.each do |word|
  Part.create(word: word)
end