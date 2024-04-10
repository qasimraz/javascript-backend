CREATE TABLE library_books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  isbn TEXT UNIQUE,  -- Optional, for storing unique book identifiers
  genre TEXT,         -- Optional, for categorizing books
  publication_year INTEGER,  -- Optional, for storing year of publication
  pages INTEGER         -- Optional, for storing number of pages
);

INSERT INTO library_books (title, author, isbn, genre, publication_year, pages)
VALUES ('To Kill a Mockingbird', 'Harper Lee', '0061217929', 'Fiction', 1960, 281);
