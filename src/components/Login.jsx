
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { auth } from '../firebase.init';
import { sendPasswordResetEmail, updateProfile } from 'firebase/auth';
import logo from '../assets/logo.png'



const Login = () => {
    const navigate = useNavigate();
   
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');
    const emailRef = useRef();
    const { loading, setLoading } = useContext(AuthContext);

    const { imageUrl, setImageUrl } = useContext(AuthContext);

    const { user, setUser } = useContext(AuthContext);

    const handlePasswordShow = () => {
        setShowPassword(!showPassword);
    }

    const handleLogIn = (e) => {
        e.preventDefault();
        //setLoginError('');
        const email = e.target.email.value;
        // console.log(email);
        const password = e.target.password.value;
        // console.log(password);
        signInUser(email, password)
            .then(result => {
                // console.log('Hello....', result.user);
                // if (!result.user.emailVerified) {

                //     setLoginError('Please verify your email address');
             

                    setUser(result.user);

                    // console.log(user);

                    navigate('/');
                    e.target.reset();
                    setLoginError('');
                    setLoading(false);
                
            })
            .catch(error => {
                // console.log('ERROR: ', error.message);
                setLoginError(error.message)
            })

    }

    // useEffect( ()=>{
    //     setLoginError('');

    // },[handleLogIn] )
    const handleGoogleSignIn = () => {

        signInWithGoogle()
            .then(result => {
             console.log(result.user.email);
                 navigate('/');

                setLoginError('');

                //   console.log("Updated: ",result.user);
                  setUser(result.user);

                  setLoading(false);

             


               
                   

            })
            .catch(error => {
                // console.log('ERROR: ', error.message);
                setLoginError(error.message);
            })
    }

    
   

    const handleForgetPassword = () => {


        const email = emailRef.current.value;
        // console.log('Forget email:', email);
        if (!email) {
            setLoginError('Please provide a valid email address.')
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    // Password reset email sent!
                    // ..

                    setLoginError('Password Reset email sent. Please check your email.')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        }

    }
    return (
        <div className="hero bg-[#036544] ">

            <div className="hero-content flex-col ">

                <div className='mx-auto'>
                      <img className='w-20 h-20 md:w-40 md:h-36' src={logo} alt="logo" />
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl text-white font-bold">Sign In</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogIn} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" ref={emailRef} name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                            <button type='button' onClick={handlePasswordShow} className='absolute right-4 top-12'> {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}  </button>
                            <label onClick={handleForgetPassword} className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Continue</button>
                        </div>
                    </form>
                    <p className='ml-4 mb-4 mr-4'>
                        New to this website ? Please <Link to={'/register'}>Register</Link>
                    </p>
                    <div>
                        <h2 className='font-bold ml-4'>Continue with</h2>
                         
                         <div className='flex justify-center'>
                         <button onClick={handleGoogleSignIn}
                            className='btn  btn-ghost  '>Google</button>

                         </div>
                        
                          
                    </div>

                    {
                        loginError && <p className='text-red-600 ml-4 mb-4 mr-4 '>
                            {loginError}

                        </p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;