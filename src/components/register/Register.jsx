import {useState} from 'react';
import './Register.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

export default function Register() {

    const [action, setAction] = useState('');

    const loginLink = () => {
        setAction('');
    };

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        cpassword: '',
    })

    const [errors, setErrors] = useState ({})
    const [valid, setValid] = useState(true)

    const handleSubmit= (e) => {
        e.preventDefault();
        let isValid = true;
        let validationErrors = {}
        if(formData.fname === "" || formData.fname === null) {
            isValid = false;
            validationErrors.fname = "First name is required"
        }
        if(formData.lname === "" || formData.lname === null) {
            isValid = false;
            validationErrors.lname = "Last name is required"
        }
        if(formData.email === "" || formData.email === null) {
            isValid = false;
            validationErrors.email = "E-mail is required"
        } else if(!/\S+@\S+\.\S+/.test(formData.email))  {
            isValid = false;
            validationErrors.email = "E-mail format is not valid"
        }

        if(formData.password === "" || formData.password === null) {
            isValid = false;
            validationErrors.password = "A password is required"
        } else if(formData.password.length < 6)  {
            isValid = false;
            validationErrors.password = "Password length: at least 6 characters"
        }

        if(formData.cpassword !== formData.password) {
            isValid = false;
            validationErrors.cpassword = "Passwords must match"
        }
        setErrors(validationErrors)
        setValid(isValid)

        if(Object.keys(validationErrors).length === 0) {
            alert ("Successfully registered")
        }
    }
    return (
        <>
            <div className={`wrapper ${action}`}>
            <div className='form-box register'>
                    <form action="" onSubmit={handleSubmit}>
                        <h1>Înregistrare</h1>
                        {
                            valid ? <></> :
                            <span className="text-danger">
                                {errors.fname}; {errors.lname}; {errors.email}; {errors.password}; {errors.cpassword}
                            </span>
                        }
                        <div className='input-box'>
                            <input 
                                type="text" 
                                name="fname" 
                                className="form-control"
                                placeholder='First name' 
                                onChange={(event) => setFormData({...formData, fname: event.target.value})}
                                 />
                            <FaUser className='icon'/>
                        </div>
                        <div className='input-box'>
                            <input 
                                type="text" 
                                name="lname" 
                                placeholder='Last name' 
                                onChange={(event) => setFormData({...formData, lname: event.target.value})}
                                 />
                            <FaUser className='icon'/>
                        </div>
                        <div className='input-box'>
                            <input 
                                type="email" 
                                name="email"
                                placeholder='E-mail' 
                                onChange={(event) => setFormData({...formData, email: event.target.value})}
                                 />
                            <FaEnvelope className='icon'/>
                        </div>
                        <div className='input-box'>
                            <input 
                                type="password" 
                                name="password"
                                placeholder='Password' 
                                onChange={(event) => setFormData({...formData, password: event.target.value})}
                                 />
                            <FaLock className='icon'/>
                        </div>
                        <div className='input-box'>
                            <input 
                                type="password" 
                                name="cpassword"
                                placeholder='Confirm password' 
                                onChange={(event) => setFormData({...formData, cpassword: event.target.value})}
                                 />
                            <FaLock className='icon'/>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Am citit și sunt de acord cu termenii și condițiile de utilizare.</label>
                        </div>
                        <button type='submit'>Înregistrare</button>
                        <div className="register-link">
                            <p>Ai deja cont? <a href="#" onClick={loginLink}>Autentifică-te</a></p>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}