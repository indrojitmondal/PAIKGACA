import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase.init';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const {user, setUser}= useContext(AuthContext);
    const navigate = useNavigate();
    // const handleUpdate = ()=>{

    // }
    const handleUpdate = e => {
          e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
    
            const profile= {
                    displayName: name,
                    photoURL: photo,
                } 

                updateProfile(auth.currentUser, profile).then(() => {
                    // Profile updated!

                    navigate('/my-profile');
                    setUser(auth.currentUser);
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    alert(error.errorMessage);
                    // ...
                  });

          

       
            }
           
 return (
        <div className='min-h-[420px]'>
              <h2 className='text-center py-3 text-xl'>Update your Profile</h2>
          
              <div className="card bg-base-100 mb-4  w-full md:w-[600px] lg:mx-auto shrink-0 shadow-2xl">
                    <form onSubmit={handleUpdate} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        
                        

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-bold">Photo URL</span>
                            </label>

                            <input type="text" name='photo' placeholder="photoURL" className="input input-bordered" required />
                       

                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-b1">Update </button>
                        </div>
                    </form>
                    
                   
                   
                    

                </div>
        
        </div>
    );
};

export default UpdateProfile;