import './App.css';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';


function BasicItemRegButton() {


  // JSON object to display in accordion in UI for demonstration purposes
  const jsonObject = [{
    "posItemID":"3636",
    "itemID":"4711",
    "unitOfMeasureCode":"PCE",
    "itemType":"CO",
    "actualUnitPrice":15.55,
    "quantity":1,
    "receiptText":"Test Item",
    "registrationNumber":"3636",
    "mainPOSItemID":"3636",
    "taxGroupID":"A1"
  }]


  return (
    <div className="">


            <div>
              {jsonObject.map(jsonObject => ( 
                <div>
                  <pre>{
                    JSON.stringify(jsonObject, null, 1)
                  }</pre>
                </div>
              ))}
            </div>




    </div>
  );
}

export default BasicItemRegButton;




      {/* <Accordion defaultActiveKey="0" class="footer">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Button variant="light">JSON</Button>
          </Accordion.Header>
          <Accordion.Body> */}
                    {/* </Accordion.Body>
        </Accordion.Item>
      </Accordion> */}