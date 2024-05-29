import {useState} from 'react';
import './Register.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

export default function Register() {

    const [action, setAction] = useState('');

    const loginLink = () => {
        setAction('');
    };

    return (
        <>
            <div className={`wrapper ${action}`}>
            <div className='form-box register'>
                    <form action="">
                        <h1>Înregistrare</h1>
                        <div className='input-box'>
                            <input type="text" placeholder='Username' required />
                            <FaUser className='icon'/>
                        </div>
                        <div className='input-box'>
                            <input type="email" placeholder='E-mail' required />
                            <FaEnvelope className='icon'/>
                        </div>
                        <div className='input-box'>
                            <input type="password" placeholder='Password' required />
                            <FaLock className='icon'/>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox"/>Am citit și sunt de acord cu termenii și condițiile de utilizare.</label>
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