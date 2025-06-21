# 📚 BookManager – Personal Library API

**Book Manager** is a simple and efficient API-based application to help users manage their personal library. Built using **Node.js**, **Express**, and **MongoDB**, this app allows users to add, update, view, and delete books with details like title, author, and publication year.

---

## 🚀 Features

- 📌 Add new books with title, author, and published year  
- 📖 View all stored books  
- ✏️ Update book details  
- ❌ Delete a book  
- 🌐 Optional frontend interface (HTML + JS + CSS)  
- 🧠 MongoDB Atlas or local MongoDB integration for real-time data persistence  

---

## 🛠️ Technologies Used

- Node.js + Express  
- MongoDB Atlas or Local MongoDB  
- Mongoose (ODM)  
- HTML, CSS, JavaScript (Frontend - optional)  
- cURL / Postman for API Testing  

---

## 📘 API Documentation

### Base URL

http://localhost:3000/api/books

1. 🟢 Create a New Book
Endpoint: POST /api/books
Description: Adds a new book to the database.
Headers: Content-Type: application/json

Request Body:
  {
    "title": "Atomic Habits",
    "author": "James Clear",
    "publishedYear": 2018
  }

Response:
  {
    "_id": "60df4...",
    "title": "Atomic Habits",
    "author": "James Clear",
    "publishedYear": 2018
  }

2. 🔵 Get All Books
Endpoint: GET /api/books
Description: Fetches all stored books.

Response:
  {
    "_id": "60df4...",
    "title": "Atomic Habits",
    "author": "James Clear",
    "publishedYear": 2018
  }



3. 🟡 Update a Book
Endpoint: PUT /api/books/:id
Description: Updates the book details (title, author, or year).

Request Body:
  {
    "publishedYear": 2020
  }

Response:
  {
    "_id": "60df4...",
    "title": "Atomic Habits",
    "author": "James Clear",
    "publishedYear": 2020
  }

4. 🔴 Delete a Book
Endpoint: DELETE /api/books/:id
Description: Deletes a book by ID.

Response:
json
  {
    "message": "Book deleted successfully"
  }

📂 Folder Structure
book-manager/
├── models/
│   └── Book.js          # Mongoose schema
├── public/
│   └── index.html       # Optional frontend
├── server.js            # Express server
├── package.json
└── README.md


💻 Running the App Locally
1. Clone the Repository
git clone https://github.com/yourusername/book-manager.git
cd book-manager
2. Install Dependencies
npm install
3. Start MongoDB
Make sure MongoDB is running locally or use MongoDB Atlas connection string in mongoose.connect().
4. Run the Server
node server.js

Visit:
http://localhost:3000

🔁 Sample curl Commands
bash
# Create a new book
curl -X POST http://localhost:3000/api/books \
-H "Content-Type: application/json" \
-d '{"title":"Atomic Habits","author":"James Clear","publishedYear":2018}'
# Get all books
curl http://localhost:3000/api/books
# Update a book
curl -X PUT http://localhost:3000/api/books/<BOOK_ID> \
-H "Content-Type: application/json" \
-d '{"publishedYear":2020}'
# Delete a book
curl -X DELETE http://localhost:3000/api/books/<BOOK_ID>

👨‍💻 Author
Kunal Kumar Saw
🔗 GitHub/SawKunal
📧 sawkunal556@gmail.com

📜 License
This project is licensed under the MIT License.

✨ Future Improvements
   ✅ Add user authentication
   🔍 Book search/filtering
   📚 Categories or tags for books
  🧾 Export book list as PDF/CSV

