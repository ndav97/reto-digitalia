import { Button, Col, Container, Form, Row, Tab, Tabs } from "react-bootstrap";
import CardPublication from "./CardPublication";

function BodyMainContainer() {
  let items = [];
  for (let index = 0; index < 10; index++) {
    items.push(<CardPublication key={index} />);
  }
  return (
    <div className="px-14 pt-4">
      <Tabs
        defaultActiveKey="muro1"
        id="justify-tab-example"
        className=" mb-3"
        justify
      >
        <Tab eventKey="muro1" title="Muro 1">
          <Container>
            <Row>
              <Col>
                <Form.Select aria-label="Default select example">
                  <option>Open</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select aria-label="Default select example">
                  <option>Open</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select aria-label="Default select example">
                  <option>Open</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select aria-label="Default select example">
                  <option>Open</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col>
                <Button variant="secondary" className="w-full">
                  Aplicar
                </Button>
              </Col>
            </Row>
          </Container>
          <div className="bg-gray-200 mt-4 rounded-md p-3">{items}</div>
        </Tab>
        <Tab eventKey="muro2" title="Muro 2">
          <span>Muro 2</span>
        </Tab>
      </Tabs>
    </div>
  );
}

export default BodyMainContainer;
