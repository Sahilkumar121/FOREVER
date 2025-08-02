import { Link, useNavigate } from 'react-router-dom';
import './login.css'
import { useRef } from 'react'
import axios from 'axios';

export default function Login() {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = async () => {
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        try {
            const response = await axios.post("http://localhost:3000/api/login", data);

            if(response.data.success) {
                navigate('/');
            }
        }catch(err) {
            console.error(err.message);
        }
    }


    return (
        <div className="login-container">
            <div className='main-container'>
                <div className="header-container">
                    Login
                </div>

                <div className="email-container">
                    <input type="text" placeholder="Email" ref={emailRef} />
                </div>

                <div className="password-container">
                    <input type="password" placeholder="Password" ref={passwordRef} />
                </div>

                <div className="extra">
                    <div className="forget-password-container">
                        Forget your password?
                    </div>

                    <div className="create-account">
                        <Link to="/signup" className='create-account-link'>
                            Create account
                        </Link>
                    </div>
                </div>

                <div className="signin-button">
                    <button onClick={handleLogin}>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    )
}
