import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Booking from './components/booking.jsx';
import Contact from './components/contact.jsx';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import {Route, Routes} from 'react-router-dom';

// import SportDetails from './components/sport-details/SportDetails';
// import Sports from './components/sports/Sports';

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
  )
}

export default App;

    //     <Route path="logout" element={<h1>You have been logged out</h1>}></Route>
    //     <Route path="editprofile" element={<h1>You can edit your profile here</h1>}></Route>
    //     <Route path="facilities" element={<Sports />}></Route>
    //     <Route path="/sport/:id" element={<SportDetails />}></Route>
    // </Routes>



