import './App.css';
import Basket from './Basket';
import Coupons from './Coupons';
import Items from './Items';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import gkLogo from './images/GK_Logo_RGB.png';
import ItemsGrid from './ItemsGrid';
import PromoGrid from './PromoGrid';

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
            style={{fontSize:"13px"}}
            >
          <Tab eventKey="registerItem" title="Items">
            {/* <Items /> */}
            <ItemsGrid />
          </Tab>
          <Tab eventKey="getBasket" title="Basket">
            <Basket />
          </Tab>
          <Tab eventKey="enterCoupon" title="Coupons">
            <Coupons />
          </Tab>
          <Tab eventKey="promotions" title="Recs">
            <PromoGrid />
          </Tab>
        </Tabs>
      </div> 


    </div>
   
  );
}

export default App;
