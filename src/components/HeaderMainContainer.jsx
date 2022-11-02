import { Button, ButtonGroup, Card } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";

function HeaderMainContainer() {
  return (
    <div className="px-14 pt-4 pb-4 border-bottom border-gray-200">
      <span>Bienvenido Bahuer S.A.C</span>
      <Card className="mt-4">
        <Card.Body>
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
            <span className="ml-5">Crear publicación</span>
          </a>
        </Card.Body>
      </Card>
      <ButtonGroup className="w-full mt-2">
        <Button variant="secondary" style={{ borderRight: "solid 2px white" }}>
          Imagenes
        </Button>
        <Button variant="secondary" style={{ borderRight: "solid 2px white" }}>
          ????????????
        </Button>
        <Button variant="secondary">????????????</Button>
      </ButtonGroup>
    </div>
  );
}

export default HeaderMainContainer;
