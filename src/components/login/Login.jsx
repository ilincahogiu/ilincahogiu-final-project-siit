import {useState} from 'react';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction('active');
    };

    return (
        <>
            <div className={`wrapper ${action}`}>
                <div className='form-box login'>
                    <form action="">
                        <h1>Autentificare</h1>
                        <div className='input-box'>
                            <input type="text" placeholder='Username' required />
                            <FaUser className='icon'/>
                        </div>
                        <div className='input-box'>
                            <input type="password" placeholder='Password' required />
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