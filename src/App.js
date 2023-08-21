import './App.css';
import BasicItemRegButton from './BasicItemRegButton';
import GetBasketContents from './GetBasketContents';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function App() {
  return (
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
        <Tab eventKey="transactionDetails" title="Transaction">
          Tab content for Transaction
        </Tab>
      </Tabs>




    </div>
  );
}

export default App;
