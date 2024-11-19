import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CouponCard = ({ coupon }) => {
  const { coupon_code, description, expiry_date, condition, coupon_type } = coupon;
  const [copied, setCopied] = useState(false);
 

  const handleCopy = () => {
    setCopied(true);
  
    toast.success("Coupon Code copied successfully!", {
        // position: toast.POSITION.TOP_RIGHT,
        // autoClose: 3000,
      });
  };

  return (
    <div className="space-y-1 p-5 text-base bg-orange-500 text-white">
      <div className="flex gap-2 items-center">
        <h2>
          Coupon Code: <span className="text-lg font-bold">{coupon_code}</span>
        </h2>
        <CopyToClipboard text={coupon_code} onCopy={handleCopy}>
        
          <button className="btn">Copy Code</button>
      </CopyToClipboard>
      </div>
      <h2>Description: {description}</h2>
      <h2>Expire Date: {expiry_date}</h2>
      <h2>Condition: {condition}</h2>
      <h2>Coupon Type: {coupon_type}</h2>
    </div>
  );
};

export default CouponCard;