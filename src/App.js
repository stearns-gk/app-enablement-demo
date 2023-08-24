import './App.css';
import Basket from './Basket';
import Coupons from './Coupons';
import Items from './Items';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import gkLogo from './GK_Logo_RGB.png';

function App() {
  return (
    <div>
      {/* <div class='gkLogo'>
        <img width={80}  src={gkLogo}></img>
      </div> */}
      <div class="app">
        <Tabs
            defaultActiveKey="registerItem"
            id="uncontrolled-tab-example"
            className="tabArea"
            >
          <Tab eventKey="registerItem" title="Items">
            <BasicItemRegButton />
          </Tab>
          <Tab eventKey="getBasket" title="Basket">
            <GetBasketContents />
          </Tab>
          <Tab eventKey="enterCoupon" title="Coupons">
            <Coupons />
          </Tab>
        </Tabs>
      </div>
    </div>
   
  );
}

export default App;
