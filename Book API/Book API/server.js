const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/Book');
const app = express();
const PORT = 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bookdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.get('/api/books', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

app.post('/api/books', async (req, res) => {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.json(savedBook);
});

app.put('/api/books/:id', async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBook);
});

app.delete('/api/books/:id', async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
