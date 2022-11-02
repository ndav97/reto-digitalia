import Placeholder from "react-bootstrap/Placeholder";
import "../styles/Aside.css";

function Aside() {
  return (
    <aside className="min-h-screen bg-gray-200 aside-container">
      <div className="sticky top-8 aside-container-box">
        <div className="flex flex-col my-8 mx-4">
          <img src="/images/logo.jpg" alt="Logo" className="rounded-xl" />
          <Placeholder
            animation="glow"
            className="flex flex-col gap-2 items-center my-6"
          >
            <Placeholder
              xs={6}
              style={{ width: "70px", height: "70px", borderRadius: "100%" }}
            />
          </Placeholder>
          <Placeholder animation="glow" className="flex flex-col gap-2">
            <Placeholder
              xs={8}
              style={{ borderRadius: "10px", height: "15px" }}
            />
            <Placeholder
              xs={6}
              style={{ borderRadius: "10px", height: "15px" }}
            />
            <Placeholder
              xs={8}
              style={{ borderRadius: "10px", height: "15px" }}
            />
            <Placeholder
              xs={8}
              style={{ borderRadius: "10px", height: "15px" }}
            />
            <Placeholder
              xs={6}
              style={{ borderRadius: "10px", height: "15px" }}
            />
            <Placeholder
              xs={6}
              style={{ borderRadius: "10px", height: "15px" }}
            />
          </Placeholder>
        </div>
        <div className="flex flex-col my-8 pt-4 px-4 border-t border-gray-400">
          <span className="mb-2">Crear requerimientos</span>
          <div className="flex flex-col pl-4">
            <a href="">
              <span>Requerimientos materiales</span>
            </a>
            <a href="">
              <span>Requerimientos de servicios</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col my-8 pt-4 px-4 border-t border-gray-400">
          <span className="mb-2">Mis requerimientos</span>
          <div className="flex flex-col pl-4">
            <a href="">
              <span>Requerimientos</span>
            </a>
            <a href="">
              <span>Ofertas</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
