// Image grid images
import puppy from './images/puppy.PNG';
import kitten from './images/kitten.png';
import goldfish from './images/goldfish.jpg';
import hamster from './images/hamster.jpg';
import * as AppEnablement from "@gk-app-enablement/app-messaging-provider";


import React from 'react';
import { useState } from 'react';



function ItemsGrid() {
    const ApiEnablement = AppEnablement.EnablementProvider.getEnablementApi();
    const posApi = ApiEnablement.getApiByName(AppEnablement.PosApi.apiName);

    const [showMe, setShowMe] = useState(false);

    // Function to toggle showing JSON data for item to register
    function showData(){
      setShowMe(!showMe);
    }
    
    function sendItem(item){
        posApi.registerExternalLineItem((result => { console.log("External item result: " + JSON.stringify(result)); }),
            item);
    }

    // TODO: add state and replace this dummy data with sample data for an item registration POST request
    const jsonObject = {
      "posItemID":"1234",
      "itemID":"1234",
      "unitOfMeasureCode":"EA",
//      "itemType":"AB",
      "actualUnitPrice":200.00,
      "quantity":1,
      "receiptText":"Puppy",
      "registrationNumber":"1234",
      "mainPOSItemID":"1234",
      "taxGroupID":"A1"
    }

    //let jsonObject = {}

       // Do not remove; for testing in browser: window.currentSessionContextFound({"businessUnitGroupID":"100000000000000048","businessUnitID":"2621","isoCurrencyCode":"USD","storeLanguage":"en_US","tenantID":"001","userLanguage":"en_US","workstationID":"122"});
      

  return (
    <div>
        <h4 className="gridTitle">Pets</h4>
        <div className="buttonsGrid">
            <div class="one" onClick={() => sendItem(jsonObject)}>
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
            <div className="two">
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
            <div className="three">
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
            <div className="four">
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
        <div className="footerData" style={{display: showMe ? "block" : "none"}}>
            {
                // "Pretty" JSON display
                Object.keys(jsonObject).map(function (element) {
                    return (
                    <ul className="dataList">
                        <li>
                        <span className="keySpan">{element + ":"}</span>
                        <span className="valueSpan">{jsonObject[element]}</span>
                        </li>
                    </ul>
                    );
                })
            }
            </div>
            <div className="showDataButton">Show Data</div>
        </div>
    </div>
  );
}


export default ItemsGrid;