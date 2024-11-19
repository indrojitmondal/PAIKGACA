import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const MyProfile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='w-11/12 mx-auto min-h-[420px]'>
               <h2 className='text-center'>Welcome, {user.displayName}</h2>
        </div>
    );
};

export default MyProfile;