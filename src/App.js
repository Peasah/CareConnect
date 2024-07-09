import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Request from './pages/Request';
import DonateForm from './pages/Donate';
import Home from './pages/Home';
import Pictures from './pages/Pictures';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/request" element={<Request />} />
        <Route path="/donate" element={<DonateForm />} />
        <Route path="/pictures" element={<Pictures/>} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;