import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aside from "./components/Aside";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Aside />
      <div className="container-page flex flex-col">
        <header className="header-page border-b border-gray-200"></header>
        <div className="container-body flex">
          <div className="main-container">
            <span>1</span>
          </div>
          <div className="red-container bg-gray-200">
            <span>2</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
