import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Home from './components/home/Home.jsx';
import Booking from './components/Booking.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import SportDetails from './components/sport-details/SportDetails.jsx';
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
          <Route path="sport/:id" element={<SportDetails /> } />
        </Routes>
      </div>
    </>
  );
}

export default App;