import {useState} from 'react';
import './Login.css';
import { FaLock, FaEnvelope } from "react-icons/fa";
import axios from 'axios';

export default function Login() {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction('active');
    };

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState ({})
    const [valid, setValid] = useState(true)

    const handleSubmit= (e) => {
        e.preventDefault();
        let isValid = true;
        let validationErrors = {}

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

        setErrors(validationErrors)
        setValid(isValid)

        axios.get('http://localhost:8000/users')
        .then(result => {
            const user = result.data.find(user => user.email === formData.email);
    
            if (user) {
                if (user.password === formData.password) {
                    alert("Successfully logged in");
                } else {
                    isValid = false;
                    validationErrors.password = "Wrong password";
                }
            } else {
                isValid = false;
                validationErrors.email = "This e-mail is not registered";
            }
        })
        .catch(err => console.log(err));
    
    }

    return (
        <>
            <div className={`wrapper ${action}`}>
                <div className='form-box login'>
                    <form action="" onSubmit={handleSubmit}>
                        <h1>Autentificare</h1>
                        {
                            valid ? <></> :
                            <span className="text-danger">
                                {errors.email}; {errors.password};
                            </span>
                        }
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
                        
                        <div className="remember-forgot">
                            <label><input type="checkbox"/>Ține-mă minte </label>
                            <a href="#">Ai uitat parola?</a>
                        </div>
                        <button type='submit'>Autentificare</button>
                        <div className="register-link">
                            <p>Nu ai cont? <a href="#" onClick={registerLink}>Înregistrează-te</a></p>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}