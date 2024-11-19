import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='min-h-[420px]'>

            <div className='bg-orange-400 py-6'>
                <h2 className='text-center text-xl text-black'>Welcome, {user.displayName}! </h2>
            </div>
            <div className='flex justify-between'>
                <div className=''>


                    <div className="bg-b1 text-white w-full  md:w-96 shadow-xl">
                        <figure className='flex flex-col justify-start'>
                            <img
                                src={user.photoURL}
                                alt={user.displayName} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-lg">Name: <span className='text-base'>{user.displayName}</span> </h2>
                            <h2 className="card-title text-lg">Email: <span className='text-base'>{user.email}</span> </h2>

                            {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
        </div> */}
                        </div>
                    </div>

                </div>

                <div>
                    <Link to={'/update-profile'} className='btn text-orange-400 font-bold'>Update Profile</Link>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;