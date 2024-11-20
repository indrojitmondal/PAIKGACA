
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { auth } from '../firebase.init';
import { sendPasswordResetEmail, updateEmail, updatePassword, updateProfile } from 'firebase/auth';
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
    useEffect(() => {
        setLoginError('');

    }, []);
    const regex = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&]{6,}$/;


    const handleReset = (e) => {
        e.preventDefault();

        let email = e.target.email.value;
        email = emailRef.current.value;
        console.log('Update Email:', email);
        const password = e.target.password.value;
        
        setErrorMessage('');
        setSuccessMessage('');
        setSuccess(false);
        // setVerificationMessage('');

        if (!regex.test(password)) {
            setErrorMessage('Password should be at least one upper case letter, one lower case letter and total length should be at least 6');
            return;
        }

         
           if(auth.currentUser.email==email){
            updatePassword(auth.currentUser, password)
            .then( ()=> {
                setUser('');
                navigate('/login');
            })
            .catch( ()=>{
                setErrorMessage('Invalid Credential');
                setResetEmail('');
            })
        }
        else{
            setErrorMessage('Invalid Credential');
            setResetEmail('');
        }
        
     


    }

    // useEffect( ()=>{
    //     setLoginError('');

    // },[handleLogIn] )





    // const handleForgetPassword = () => {


    //     const email = emailRef.current.value;
    //     // console.log('Forget email:', email);
    //     if (!email) {
    //         setLoginError('Please provide a valid email address.')
    //     }
    //     else {
    //         sendPasswordResetEmail(auth, email)
    //             .then(() => {
    //                 // Password reset email sent!
    //                 // ..

    //                 setLoginError('Password Reset email sent. Please check your email.')
    //             })
    //             .catch((error) => {
    //                 const errorCode = error.code;
    //                 const errorMessage = error.message;
    //                 // ..
    //             });
    //     }

    // }
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
                            <input type="email" {...(resetEmail ? { value: resetEmail } : {})} ref={emailRef} name='email' placeholder="email" className="input input-bordered" required />

                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text font-bold text-base">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                            <button type='button' onClick={handlePasswordShow} className='absolute right-4 top-12'> {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}  </button>
                            {/* <label  className="label">
                                <Link to={'/'} className="label-text-alt link link-hover text-base">Forgot password?</Link>
                           
                            </label> */}
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