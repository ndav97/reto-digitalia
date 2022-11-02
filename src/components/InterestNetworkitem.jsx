import { Button, Placeholder } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";

function InterestNetworkItem() {
  return (
    <div className="flex mt-4">
      <Button
        variant="outline-secondary"
        style={{ width: "40px", height: "40px", borderRadius: "100%" }}
      >
        <FaUserAlt />
      </Button>
      <div className="flex flex-col w-32 ml-2">
        <Placeholder animation="glow" className="flex flex-col gap-2">
          <Placeholder xs={8} style={{ borderRadius: "10px" }} />
          <Placeholder xs={12} style={{ borderRadius: "10px" }} />
          <Placeholder xs={10} style={{ borderRadius: "10px" }} />
        </Placeholder>
      </div>
    </div>
  );
}

export default InterestNetworkItem;
