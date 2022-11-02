import {
  Button,
  Card,
  Col,
  Container,
  Placeholder,
  Row,
} from "react-bootstrap";
import { BsImageAlt } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

function CardPublication() {
  return (
    <Card className="mb-4">
      <Card.Header>
        <Button
          variant="outline-secondary"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "100%",
          }}
        >
          <FaUserAlt />
        </Button>
        <a href="">
          <span className="ml-5">Empresa XYZ</span>
        </a>
      </Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col sm={8}>
              <Placeholder animation="glow" className="flex flex-col gap-2">
                <Placeholder xs={4} style={{ borderRadius: "10px" }} />
                <Placeholder xs={6} style={{ borderRadius: "10px" }} />
                <Placeholder xs={8} style={{ borderRadius: "10px" }} />
                <Placeholder xs={10} style={{ borderRadius: "10px" }} />
                <br />
                <Placeholder xs={10} style={{ borderRadius: "10px" }} />
                <Placeholder xs={6} style={{ borderRadius: "10px" }} />
                <Placeholder xs={8} style={{ borderRadius: "10px" }} />
                <Placeholder xs={6} style={{ borderRadius: "10px" }} />
              </Placeholder>
            </Col>
            <Col sm={4} className="bg-gray-300 flex py-4 justify-center">
              <BsImageAlt style={{ width: "80%", height: "auto" }} />
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default CardPublication;
