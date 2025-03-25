import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminBooks.css"; // ✅ Import CSS file

const AdminBooks = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [published_date, setPublished_date] = useState("");
  const [isbn, setIsbn] = useState("");
  const [category, setCategory] = useState("");
  const [editingBook, setEditingBook] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token") || localStorage.getItem("access_token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleAuthError = (error) => {
    if (error.response?.status === 401) {
      alert("Session expired! Please log in again.");
      localStorage.removeItem("token");
      navigate("/admin/login");
    }
  };

  const fetchBooks = async () => {
    if (!token) return;

    try {
      const response = await axios.get("http://127.0.0.1:8000/api/books/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBooks(response.data);
    } catch (error) {
      handleAuthError(error);
      console.error("Error fetching books:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (!token) return;
    fetchBooks();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return;

    const bookData = { title, author, published_date, isbn, category };

    try {
      let response;
      if (editingBook) {
        response = await axios.put(
          `http://127.0.0.1:8000/api/books/${editingBook.id}/`,
          bookData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        response = await axios.post("http://127.0.0.1:8000/api/books/", bookData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      setBooks((prevBooks) =>
        editingBook
          ? prevBooks.map((book) => (book.id === editingBook.id ? response.data : book))
          : [...prevBooks, response.data]
      );

      setTitle("");
      setAuthor("");
      setPublished_date("");
      setIsbn("");
      setCategory("");
      setEditingBook(null);
    } catch (error) {
      handleAuthError(error);
      console.error("Error saving book:", error.response?.data || error.message);
    }
  };

  const deleteBook = async (id) => {
    if (!token) return;

    try {
      await axios.delete(`http://127.0.0.1:8000/api/books/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    } catch (error) {
      handleAuthError(error);
      console.error("Error deleting book:", error.response?.data || error.message);
    }
  };

  const startEdit = (book) => {
    setEditingBook(book);
    setTitle(book.title);
    setAuthor(book.author);
    setPublished_date(book.published_date);
    setIsbn(book.isbn);
    setCategory(book.category);
  };

  return (
    <div className="admin-books-container">
      <h2>📚 Manage Library Books</h2>

      <form onSubmit={handleSubmit} className="book-form">
        <input type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <input type="date" placeholder="Published Date" value={published_date} onChange={(e) => setPublished_date(e.target.value)} required />
        <input type="number" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
        <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
        <button type="submit" className="submit-btn">{editingBook ? "Update" : "Add"} Book</button>
      </form>

      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <span>{book.title} - {book.author} - {book.published_date} - {book.isbn} - {book.category}</span>
            <div className="book-actions">
              <button className="edit-btn" onClick={() => startEdit(book)}>Edit</button>
              <button className="delete-btn" onClick={() => deleteBook(book.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      <button onClick={handleLogout} className="logout-btn">Logout</button>
    </div>
  );
};

export default AdminBooks;
