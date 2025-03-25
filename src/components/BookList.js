import { useState, useEffect } from "react";
import axios from "axios";
import "./BookList.css"; // ✅ Import CSS file

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/student/books/")
      .then((response) => {
        console.log("API Response:", response.data);
        setBooks(response.data);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="book-list-container">
      <h2>📚 Library Books</h2>
      <h4 className="book-header">Title - Author</h4> {/* ✅ Moved Up */}
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <span className="book-title">{book.title}</span> - 
            <span className="book-author">{book.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
