import './App.css';
import React from 'react';
import { useState } from 'react';



export default function Basket() {

  const [basket, setShowBasket] = useState(false);
  const [data, setShowOtherData] = useState(false);

  // Function to toggle showing JSON data for basket items
  function showBasket(){
    setShowBasket(!basket);
  }

  // Function to toggle showing JSON data for other items
  function showOtherData() {
    setShowOtherData(!data)
  }
  
  // TODO: replace this dummy data with data from the API call. Just for displaying while developing.
  const basketData = [{
    "posItemID":"1234",
    "itemID":"1234",
    "itemName": "Puppy"
  }]

  const otherData = [{
    "posItemID":"5678",
    "itemID":"5678",
    "itemName": "Stuff"
  },
  {
    "posItemID":"5678",
    "itemID":"5678",
    "itemName": "Stuff"
  },
  {
    "posItemID":"5678",
    "itemID":"5678",
    "itemName": "Stuff"
  }]


  return (
    <div>
        {/* Button to perform a GET request of the current items in the basket */}
        <div onClick={showBasket} class="showBasketDiv">
            <div class="showDataButton">Get Current Basket</div>
            <div class="dataDiv" style={{display: basket ? "block" : "none" }}>
                {basketData.map(basketData => ( 
                <div>
                    <pre>{
                    JSON.stringify(basketData, null, 1)
                    }</pre>
                </div>
                ))}
            </div>
        </div>
        {/* Button for getting other misc data from the POS */}
        <div onClick={showOtherData} class="showBasketDiv">
            <div class="showDataButton">Get Other Data</div>
            <div class="dataDiv" style={{display: data ? "block" : "none" }}>
                {otherData.map(data => ( 
                <div>
                    <pre>{
                    JSON.stringify(data, null, 1)
                    }</pre>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}