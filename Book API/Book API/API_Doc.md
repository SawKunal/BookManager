# API Endpoints

## GET /api/books
- Returns all books

## POST /api/books
- Creates a new book
- Body: {
    "title": "1984",
    "author": "George Orwell",
    "publishedYear": 1949
  }

## PUT /api/books/:id
- Updates a book by ID
- Body: {
    "title": "Animal Farm"
  }

## DELETE /api/books/:id
- Deletes a book by ID
