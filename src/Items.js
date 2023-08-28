import './App.css';
import React from 'react';
import { useState } from 'react';
import puppy from './images/puppy.PNG';



export default function Items() {

  const [showMe, setShowMe] = useState(false);

  // Function to toggle showing JSON data for item to register
  function showData(){
    setShowMe(!showMe);
  }
  
  // TODO: replace this dummy data with data for the POST request for item registration
  const jsonObject = [{
    "posItemID":"1234",
    "itemID":"1234",
    "unitOfMeasureCode":"ABC",
    "itemType":"AB",
    "actualUnitPrice":200.00,
    "quantity":1,
    "receiptText":"Puppy",
    "registrationNumber":"1234",
    "mainPOSItemID":"1234",
    "taxGroupID":"A1"
  }]


  return (
      <div>
        <div class='item'>
          <img width={150} height={150} src={puppy}></img>
          <div>
            <span>Puppy</span>
          </div>
          <div>
            <span>$200</span>
          </div>
        </div>

      {/* Button to show/hide the data for the POST request to register a new item */}
      <div onClick={showData} class="footer">
        <div class="dataDiv" style={{display: showMe?"block":"none"}}>
            {jsonObject.map(jsonObject => ( 
              <div>
                <pre>{
                  JSON.stringify(jsonObject, null, 1)
                }</pre>
              </div>
            ))}
          </div>
          <div class="showDataButton">Show Data</div>
      </div>
    </div>
  );
}