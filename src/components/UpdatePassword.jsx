
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { auth } from '../firebase.init';
import { sendPasswordResetEmail, signOut, updateEmail, updatePassword, updateProfile } from 'firebase/auth';
import logo from '../assets/logo.png'




const UpdatePassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');
    const emailRef = useRef();
    const { loading, setLoading } = useContext(AuthContext);

    const { imageUrl, setImageUrl } = useContext(AuthContext);

    const { user, setUser } = useContext(AuthContext);
    const { targetPath, resetEmail, setResetEmail } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handlePasswordShow = () => {
        setShowPassword(!showPassword);
    }
   
    

    const handleReset = (e) => {
        e.preventDefault();
        
        setErrorMessage('');
        setSuccessMessage('');
        setSuccess(false);
        const email = e.target.email.value;
        sendPasswordResetEmail(auth, email)
        .then( ()=>{
           // window.location.href = 'https://mail.google.com/mail/u/0/#inbox';
            window.open('https://mail.google.com/mail/u/0/#inbox', '_blank');
            setUser('');
            navigate('/');
        })
        .catch( error => {
            alert('Please register with a valid email');
        })

    }

 return (
        <div className="hero bg-[#036544] min-h-screen ">

            <div className="hero-content flex-col ">

                <Link to={'/'} className='mx-auto'>
                    <img className='w-20 h-20 md:w-40 md:h-36' src={logo} alt="logo" />
                </Link>
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl text-white font-bold">Reset Password Now</h1>

                </div>
                <div className="card bg-base-100  w-full md:w-[400px] shrink-0 shadow-2xl">
                    <form onSubmit={handleReset} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Email</span>
                            </label>
                            {/* <input type="email" {...(resetEmail ? { value: resetEmail } : {})} ref={emailRef} name='email' placeholder="email" className="input input-bordered" required /> */}

                            <input type="email" Value={resetEmail}  name='email' placeholder="email" className="input input-bordered" required />
                       
                       
                        </div>
                         
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Reset</button>
                        </div>
                    </form>



                    {/* {
                        loginError && <p className='text-red-600 ml-4 mb-4 mr-4 '>
                            {loginError}

                        </p>
                    } */}

                    {
                        errorMessage && <p className='text-red-600 ml-4 mb-4 mr-4 '>
                            {errorMessage}

                        </p>
                    }
                </div>
            </div>
        </div>
    );
};

export default UpdatePassword;