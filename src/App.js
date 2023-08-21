import './App.css';
import BasicItemRegButton from './BasicItemRegButton';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function App() {
  return (
    <div class="app">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="tabArea"
        >
        <Tab eventKey="registerItem" title="Items">
          <BasicItemRegButton />
        </Tab>
        <Tab eventKey="getBasket" title="Basket">
          Tab content for Profile
        </Tab>
        <Tab eventKey="contact" title="Transaction">
          Tab content for Contact
        </Tab>
      </Tabs>




    </div>
  );
}

export default App;
