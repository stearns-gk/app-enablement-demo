'use client'

import './App.css';
import React from 'react';
import { useState } from 'react';




export default function Coupons() {

  const [showMe, setShowMe] = useState(false);


  // Function to toggle showing JSON data for item to register
  function showData(){
    setShowMe(!showMe);
  }
  
  // JSON object to display in accordion in UI for demonstration purposes
  // TODO: Replace with data to be POSTed
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