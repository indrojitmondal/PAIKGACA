import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className='flex items-center justify-between md:gap-5'>



                <div className="avatar">
                    <div className="w-10 h-10  rounded-full">
                        <img className='' src={user.photoURL} />
                    </div>
                </div>

                <h2 className='hidden md:block'>{user.email}</h2>


           


                <button className='btn'>Log Out</button>
            </div>
            <h2 className='block md:hidden'>{user.email}</h2>
        </div>
    );
};

export default Profile;