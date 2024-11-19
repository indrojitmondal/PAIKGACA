import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className=' min-h-[420px]'>

            <div className='bg-orange-400 py-6'>
                <h2 className='text-center text-xl text-black'>Welcome, {user.displayName}! Take a moment to personalize your space.</h2>
            </div>
            <div className=''>


                <div className="bg-slate-400  w-full  md:w-96 shadow-xl">
                    <figure className='flex flex-col justify-start'>
                        <img 
                            src={user.photoURL}
                            alt={user.displayName} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {user.displayName}</h2>
                        <h2 className="card-title">Email: {user.email}</h2>
                    
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default MyProfile;