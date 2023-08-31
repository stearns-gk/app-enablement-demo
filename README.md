To run this app, you will need to do the following:

    npm install
    npm start


This React app contains the following components:

App.js
    The main component which contains tabs for Items, Basket, Coupons, and Promos

    Tabs:
        Items (ItemsGrid.js)
            This component contains 4 pets that can be added to the transaction.
            
            At the bottom of the tab there is a button to show/hide a sample of data that is sent in the request to register an item.

        Basket (Basket.js)
            This component contains two buttons to show/hide data that will be gotten from the POS to demonstrate how easy
            it is to make GET requests.

        Coupon (Coupons.js)
            This component contains two buttons to show how easy it is to create/register a coupon via AppEnablement.

        Promo (PromoGrid.js)
            This component contains a grid of 4 recommended products based on what is in the transaction.

TODOS:
    1. Include the AppEnablement JS/TS files 
    2. Include the appropriate methods to make the API requests 
    3. Replace the dummy data in each component that is currently hard-coded with the data that is retrieved via the API requests to display in the UI
    4. For the Promo tab, include some logic to get the pets that have been added to the transaction in the POS and make pet-specific recommendations for items (dog leash, cat food, fish food, etc.). These pet-related items could simply be pulled from a large object stored in the app state, and the logic could be fairly straightforward conditionals: if dog, have 4 dog-specific items, if dog and cat, 2 for each animal, etc.


