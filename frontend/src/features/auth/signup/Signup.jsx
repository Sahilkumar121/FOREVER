import { Link, useNavigate } from "react-router-dom";
import './signup.css'
import { useRef } from "react";
import axios from 'axios'

export default function SignUp() {

    const navigate = useNavigate();
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSignup = async () => {
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        try {
            const response = await axios.post('http://localhost:3000/api/signup', data);
            console.log("SignUp succesfully",response.data);
            navigate('/login')
        }catch(err){
            console.error(err);
        }

        console.log(data);
    }

    return (
        <div className="login-container">
            <div className='main-container'>
                <div className="header-container">
                    Sign Up
                </div>
                <div className="name-container">
                    <input type="text" placeholder="Name" ref={nameRef} />
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

                    <div className="create-account-container">
                        <Link to="/login" className="login-account-link" >
                            Login Here
                        </Link>
                    </div>
                </div>

                <div className="signup-button">
                    <button onClick={handleSignup}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>

    )
}
