import React from 'react';
import s1 from '../assets/services/1.webp';
import s2 from '../assets/services/2.webp';

const Services = () => {
    return (
        <div className='mt-5'>

            <h2 className='text-xl text-center font-bold  '>OUR SERVICES</h2>
            

            <div className='w-8/12 mx-auto'>
                <p>At our coupon collection application, we aim to make savings effortless and accessible for everyone. Our platform provides a comprehensive collection of exclusive deals, discounts, and promotional offers across various categories, including shopping, dining, entertainment, and more. We ensure that users can easily browse, save, and redeem coupons tailored to their interests and preferences. With real-time updates, seamless usability, and personalized recommendations, we make finding the best deals simple and enjoyable. Join us to save more and spend smarter every day!</p>

                <h2 className='font-bold'>Process to Get services:</h2>
                {/* <ol> 
                   <li>1. Users have to login first</li>
                   <li>2. Collect coupon</li>
                   <li>3. Finally, Shop from the store applying the coupon codes. </li>
               </ol> */}
                <ul className="steps steps-vertical lg:steps-horizontal">
                    <li className="step step-primary">Login</li>
                    <li className="step step-primary">Collect coupon</li>
                    <li className="step">Apply coupon</li>
                    <li className="step">Purchase Product</li>
                </ul>
            </div>
            <div className='my-3 lg:flex justify-center gap-5'>

                <img className='w-[200px] mx-auto lg:mx-0 h-[200px] lg:w-[300px] lg:h-[300px]' src={s1} alt="s1" />
                <img className='w-[200px] mx-auto mt-4 lg:mt-0 lg:mx-0 h-[200px] lg:w-[300px] lg:h-[300px]' src={s2} alt="s2" />



            </div>

        </div>
    );
};

export default Services;