// Image grid images
import puppy from './images/puppy.PNG';
import kitten from './images/kitten.png';
import goldfish from './images/goldfish.jpg';
import hamster from './images/hamster.jpg';

import React from 'react';
import { useState } from 'react';



function ItemsGrid() {
    
    const [showMe, setShowMe] = useState(false);

    // Function to toggle showing JSON data for item to register
    function showData(){
      setShowMe(!showMe);
    }
    
    // TODO: add state and replace this dummy data with sample data for an item registration POST request
    const jsonObject = {
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
    }

  return (
    <div>
        <h4 class="gridTitle">Pets</h4>
        <div class="buttonsGrid">
            <div class="one">
                <div>
                    <img width={100} height={100} src={puppy}></img>
                    <div>
                        <span>Puppy</span>
                    </div>
                        <span>$200</span>
                    <div>
                    </div>
                </div>
            </div>
            <div class="two">
                <div>
                    <img width={100} height={100} src={kitten}></img>
                    <div>
                        <span>Kitten</span>
                    </div>
                    <div>
                        <span>$180</span>
                    </div>
                </div>
            </div>
            <div class="three">
                <div>
                    <img width={100} height={100} src={hamster}></img>
                    <div>
                        <span>Hamster</span>
                    </div>
                    <div>
                        <span>$20</span>
                    </div>
                </div>
            </div>
            <div class="four">
                <div>
                    <img width={100} height={100} src={goldfish}></img>
                    <div>
                        <span>Goldfish</span>
                    </div>
                    <div>
                        <span>$5</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Button to show/hide the data for the POST request to register a new item */}
      <div onClick={showData} class="footer">
        <div class="footerData" style={{display: showMe ? "block" : "none"}}>
            {
                // "Pretty" JSON display
                Object.keys(jsonObject).map(function (element) {
                    return (
                    <ul class="dataList">
                        <li>
                        <span class="keySpan">{element + ":"}</span>
                        <span class="valueSpan">{jsonObject[element]}</span>
                        </li>
                    </ul>
                    );
                })
            }
            </div>
            <div class="showDataButton">Show Data</div>
        </div>
    </div>
  );
}


export default ItemsGrid;