import { AiOutlineSearch } from "react-icons/ai";
import { BsBell, BsFillGearFill, BsFillInfoCircleFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { Button, Form, InputGroup, Navbar } from "react-bootstrap";
import "../styles/Header.css"

function Header() {
  return (
    <>
      <Navbar bg="white" className="header-page border-b border-gray-200">
        <div className="search-container px-14">
          <Form>
            <InputGroup className="w-2/5">
              <Button variant="outline-secondary">
                <AiOutlineSearch />
              </Button>
              <Form.Control placeholder="Buscar proveedores o servicios" />
            </InputGroup>
          </Form>
        </div>
        <div className="user-options-container w-80 flex gap-2 items-center justify-center">
          <Button
            variant="outline-secondary"
            style={{ width: "40px", height: "40px", borderRadius: "100%" }}
          >
            <BsFillInfoCircleFill />
          </Button>
          <Button
            variant="outline-secondary"
            style={{ width: "40px", height: "40px", borderRadius: "100%" }}
          >
            <BsFillGearFill />
          </Button>
          <Button
            variant="outline-secondary"
            style={{ width: "40px", height: "40px", borderRadius: "100%" }}
          >
            <BsBell />
          </Button>
          <Button
            variant="outline-secondary"
            style={{ width: "55px", height: "55px", borderRadius: "100%" }}
          >
            <FaUserAlt style={{ width: "30px", height: "30px" }} />
          </Button>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
