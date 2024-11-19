import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const Profile = () => {
    const { user, setUser,targetPath, setTargetPath } = useContext(AuthContext);
    
    const handleLogOut= ()=>{
         setUser('');
         setTargetPath('/');
         <Navigate to={'/'}></Navigate>
    }
    return (
        <div>
            <div className='flex items-center justify-between md:gap-5'>



                <div className="avatar">
                    <div className="w-10 h-10  rounded-full">
                        <img className='' src={user.photoURL} />
                    </div>
                </div>

                <div className='hidden md:block'>
                    <h4 className='text-center text-sm'>Hello, {user.displayName}</h4>
                    <h2 className='text-base'>{user.email}</h2>
                </div>


           


                <button onClick={handleLogOut} className='px-4 py-1 text-black bg-white text-sm rounded-2xl'>Log Out</button>
            </div>
            {/* <h2 className='block md:hidden'>{user.email}</h2> */}
            <div className='block md:hidden space-y-1 mt-2 md:space-y-3'>
                    <h4 className='text-center text-sm'>Hello, {user.displayName}</h4>
                    <h2 className='text-base'>{user.email}</h2>
                </div>
        </div>
    );
};

export default Profile;