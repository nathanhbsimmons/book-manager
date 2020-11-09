9.times do |i|
    Book.create(
      title: "Book #{i + 1} of LOTR",
      author: "J.R.R. Tolkien",
      illustrator: "Imagination",
      edition: "First",
      isbn: "TABA12435#{i + 1}",
      notes_description: "hobbits, elves, dwarves, wizards, ents, rings, good, evil, there and back again. I know there aren't 9 books, but three books plus The Hobbit, a full page does not make",
    )
end
