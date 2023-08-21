import './App.css';
import BasicItemRegButton from './BasicItemRegButton';
import GetBasketContents from './GetBasketContents';
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
          <Tab eventKey="couponDetails" title="Coupon">
            Tab content for Coupon
          </Tab>
        </Tabs>
      </div>
    </div>
   
  );
}

export default App;
