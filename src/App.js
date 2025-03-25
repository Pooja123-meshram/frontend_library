import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginAdmin from "./components/LoginAdmin";
import BookList from "./components/BookList";
import Home from "./components/Home";
import AdminBooks from "./components/AdminBooks";

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<LoginAdmin />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/admin/books" element={<AdminBooks/>}/>
      </Routes>
    </Router>
  );
}

export default App;
