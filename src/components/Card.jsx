import React from 'react';
import ReactStars from "react-rating-stars-component";

const Card = ({ brand }) => {
    console.log('Hello', brand);
    const { brand_logo, brand_name, rating, description } = brand;
    return (
        <div className='lg:w-8/12 flex px-4 lg:px-0 gap-4 lg:justify-between  items-center mx-auto py-8'>
            <div className="left">
                <img className='w-40 h-40 lg:w-96 lg:h-96' src={brand_logo} alt="" />
                <h2 className='text-xl'>{brand_name}</h2>


                <div className='flex items-center gap-3'>


                    <ReactStars count={5}

                        size={24}
                        activeColor="#ffd700"
                        value={rating}
                    >   </ReactStars>
                    {rating}

                </div>

            </div>

            <div className="middle">

                <h2 className='text-xl'>{brand_name}</h2>
                <h2 className='text-lg'>{description}</h2>


                <div className="lg:hidden ">
                    <button className='btn'>View Details</button>
                </div>


            </div>
            <div className="hidden lg:block right">
                <button className='btn'>View Details</button>
            </div>

        </div>
    );
};

export default Card;