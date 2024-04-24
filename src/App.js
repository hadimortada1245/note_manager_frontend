import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AddNote from './pages/AddNote';
import EditNote from './pages/EditNote';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer autoClose={5000} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddNote />} />
          <Route path="/editNote/:Id" element={<EditNote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
