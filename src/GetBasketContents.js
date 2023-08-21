'use client'

import './App.css';
import React from 'react';
import { useState } from 'react';



export default function GetBasketContents() {

  const [showMe, setShowMe] = useState(false);


  // Function to toggle showing JSON data for item to register
  function showData(){
    setShowMe(!showMe);
  }
  
  // Dummy daya to delete. Just for displaying while developing
  const basketData = [{
    "posItemID":"1234",
    "itemID":"1234",
    "itemName": "Puppy"
  },
  {
    "posItemID":"1234",
    "itemID":"1234",
    "itemName": "Puppy"
  }]


  return (
    <div>
        <div onClick={showData} class="">
            <div class="showDataButton">Get Current Transaction</div>
            <div  style={{display: showMe?"block":"none"}}>
                {basketData.map(basketData => ( 
                <div>
                    <pre>{
                    JSON.stringify(basketData, null, 1)
                    }</pre>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}