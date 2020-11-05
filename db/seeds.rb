# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

9.times do |i|
    Book.create(
      isbn: "TABA12435#{i + 1}",
      title: "Book #{i + 1} of LOTR",
      author: "J.R.R. Tolkien",
      illustrator: "Imagination",
      edition: "First",
      notes_description: "hobbits, elves, dwarves, wizards, ents, rings, good, evil, there and back again. I know there aren't 9 books, but three books plus The Hobbit, a full page does not make",
    )
end
