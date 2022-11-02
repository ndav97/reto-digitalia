import { useState } from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aside from "./components/Aside";
import Header from "./components/Header";
import InterestNetworkContainer from "./components/InterestNetworkContainer";
import HeaderMainContainer from "./components/HeaderMainContainer";
import BodyMainContainer from "./components/BodyMainContainer";

function App() {
  return (
    <>
      <Aside />
      <div className="container-page flex flex-col">
        <Header />
        <div className="container-body flex">
          <div className="main-container">
            <HeaderMainContainer />
            <BodyMainContainer />
          </div>
          <InterestNetworkContainer />
        </div>
      </div>
    </>
  );
}

export default App;
