import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/value-1518159-1286450.png?f=webp&w=256"
            alt=""
            style={{ width: "110px", objectFit: "contain" }}

          />
          <h2>Great Value</h2>
          
        </div>
        <div className="flex items-start">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/check-delivery-4929026-4101127.png?f=webp&w=256"
            style={{width:"100px", objectFit:"contain"}}
            alt=""
          />
          <h2>On-Time Delivery</h2>
        </div>
        <div className="flex items-start">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/payment-2651067-2198115.png?f=webp&w=256"
            style={{width:"100px", objectFit:"contain"}}
            alt=""
          />
          <h2>Secure Payments</h2>
        </div>
        <div className="flex items-start">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/cross-platform-2781243-2305958.png?f=webp&w=256"
            style={{width:"100px", objectFit:"contain"}}
            alt=""
          />
          <h2>Cross-Platform <br></br>Support</h2>
        </div>
        <div className="flex items-start">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/24-h-support-2067460-1751236.png?f=webp&w=256"
            style={{width:"100px", objectFit:"contain"}}
            alt=""
          />
          <h2>24 Hour  <br></br>Customer Support </h2>
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
