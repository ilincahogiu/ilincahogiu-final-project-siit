import './App.css';
import Home from './components/home/Home';
import SportDetails from './components/sport-details/SportDetails';
import Sports from './components/Sports';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<h1>Hello from the login page</h1>}></Route>
        <Route path="register" element={<h1>Hello from the register page</h1>}></Route>
        <Route path="logout" element={<h1>You have been logged out</h1>}></Route>
        <Route path="editprofile" element={<h1>You can edit your profile here</h1>}></Route>
        <Route path="booking" element={<Sports />}></Route>
        <Route path="/sport/:id" element={<SportDetails />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
