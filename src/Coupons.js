import './App.css';
import React from 'react';



export default function Coupons() {
  
  // TODO: Replace with data for POST request to register new coupon
  const couponObject = [{
    "couponId": "abc123",
    "percentage": "5%",
    "otherField": "etc"
  }]


  return (
    <div class="couponsTab">
        <div class="couponDiv">
            <span>5%</span>
        </div>
        <div class="couponDiv">
            <span>10%</span>
        </div>
    </div>
  );
}