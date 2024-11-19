import React from 'react';

const SellCard = ({brand}) => {
    const { brand_logo, brand_name,coupons,isSaleOn,category}= brand;
    // console.log("hello..coupons",coupons);
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className='w-40 h-40'
                        src={brand_logo}
                        alt={brand_name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {brand_name}
                        
                    </h2>
                    <p>Total Coupons: {coupons.length}</p>
                    <p>Category: {category}</p>
                    {/* <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SellCard;