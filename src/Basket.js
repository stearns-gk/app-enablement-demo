import './App.css';
import React from 'react';
import { useState } from 'react';
import * as AppEnablement from "@gk-app-enablement/app-messaging-provider";
import Item from './Item'


function Basket() {
  const ApiEnablement = AppEnablement.EnablementProvider.getEnablementApi();
  const posApi = ApiEnablement.getApiByName(AppEnablement.PosApi.apiName);

  const [basket, setShowBasket] = useState(true);
  const [data, setShowOtherData] = useState(false);
  const [basketData, setBasketData] = useState([]);

  // Function to toggle showing JSON data for basket items
  function showBasket(){
//    if (!basket) {
      console.log("Requesting basket");
      posApi.getCurrentTransaction((data => { console.log(JSON.stringify(data)); extractLineItems(data)}));
    //}
//    setShowBasket(!basket);
  }

  // Function to toggle showing JSON data for other items
  function showOtherData() {
    setShowOtherData(!data)
  }

  function extractLineItems(trx) {
    if (trx && trx.retailTransactionList) {
      setBasketData(getItems(trx.retailTransactionList[0].retailTransactionLineItemList));
    }
    else {
      setBasketData([]);
    }
  }

  function getItems(retailTransactionLineItemList) {
    console.log("retailTransactionLineItemList", retailTransactionLineItemList);

    let itemList = [];

    if (retailTransactionLineItemList && retailTransactionLineItemList.length > 0) {
        for (let j = 0; j < retailTransactionLineItemList.length; j++) {
            let retailTransactionLineItem = retailTransactionLineItemList[j];
            //console.log({retailTransactionLineItem});
            if (retailTransactionLineItem.retailTransactionLineItemTypeCode === "SR") {

                let saleReturnLineItemList = retailTransactionLineItem.saleReturnLineItemList;
                if (saleReturnLineItemList && saleReturnLineItemList.length > 0) {
                    for (let k = 0; k < saleReturnLineItemList.length; k++) {
                        let saleReturnLineItem = saleReturnLineItemList[k];

                        itemList.push(saleReturnLineItem);

                        console.log("slri: " + JSON.stringify(saleReturnLineItem));
                    }
                }
            }
        }
    }

    return itemList;
}
  
  let otherData = {
    "posItemID":"5678",
    "itemID":"5678",
    "itemName": "Stuff",
    "otherField": "etc."
  }


  return (
    <div>
        {/* Button to perform a GET request of the current items in the basket */}
        <div onClick={showBasket} class="showBasketDiv">
            <div class="showDataButton">Get Current Basket</div>
            <div class="dataDiv" style={{display: basket ? "block" : "none" }}>
              { 
                basketData.map(function (element) {
                  return (<Item data={element} />
                  );
                }) 
              }
            </div>
        </div>
        {/* Button for getting other data (customer, transaction, etc.) from the POS */}
        <div onClick={showOtherData} class="showBasketDiv">
            <div class="showDataButton">Get Other Data</div>
            <div class="dataDiv" style={{display: data ? "block" : "none" }}>
            {
                Object.keys(otherData).map(function (element) {
                  return (
                    <ul class="dataList">
                      <li>
                        <span class="keySpan">{element + ":"}</span>
                        <span class="valueSpan">{otherData[element]}</span>
                      </li>
                    </ul>
                  );
                })
              }
            </div>
        </div>
    </div>
  );
}

export default Basket;