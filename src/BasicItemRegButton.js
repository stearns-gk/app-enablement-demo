'use client'

import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import puppy from './puppy.PNG';



export default function BasicItemRegButton() {

  const [showMe, setShowMe] = useState(false);


  // Function to toggle showing JSON data for item to register
  function showData(){
    setShowMe(!showMe);
  }
  
  // JSON object to display in accordion in UI for demonstration purposes
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