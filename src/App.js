import './App.css';
import Basket from './Basket';
import Coupons from './Coupons';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ItemsGrid from './ItemsGrid';
import PromoGrid from './PromoGrid';

function App() {
  return (
    <div>
      <div class="app">
        <Tabs
            defaultActiveKey="registerItem"
            id="uncontrolled-tab-example"
            className="tabArea"
            style={{fontSize:"13px"}}
            >
          <Tab eventKey="registerItem" title="Items">
            <ItemsGrid />
          </Tab>
          <Tab eventKey="getBasket" title="Basket">
            <Basket />
          </Tab>
          <Tab eventKey="enterCoupon" title="Coupons">
            <Coupons />
          </Tab>
          <Tab eventKey="promotions" title="Promo">
            <PromoGrid />
          </Tab>
        </Tabs>
      </div> 
    </div>
  );
}

export default App;
