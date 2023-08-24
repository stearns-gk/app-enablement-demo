To run this app, you will need to do the following:

    npm install
    npm start


This React app contains the following components:

App.js
    The main component which contains tabs for Items, Basket, and Coupons

    Tabs:
        Items (Items.js)
            This component contains a single item to register (a puppy).
            
            At the bottom of the tab there is a button to show/hide the data that is sent in the request to register an item.

        Basket (Basket.js)
            This component contains two buttons to show/hide data that will be gotten from the POS to demonstrate how easy
            it is to make GET requests.

        Coupon (Coupons.js)
            This component contains two buttons to show how easy it is to create/register a coupon via AppEnablement.

TODOS:
    1. Include the AppEnablement JS/TS files 
    2. Include the appropriate methods to make the API requests 
    3. Replace the dummy data in each component that is currently hard-coded as consts with the data that is retrieved 
    via the API requests to display in the UI


