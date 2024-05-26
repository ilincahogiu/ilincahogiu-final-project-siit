import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Home from './components/home/Home.jsx';
import Booking from './components/Booking.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import {Route, Routes} from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />     
          <Route path="register" element={<Register />} />  
        </Routes>
      </div>
    </>
  );
}

export default App;