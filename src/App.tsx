import React from "react";
import Header from "./components/Header";
import CardNegative from "./components/CardNegative";
import CardPositive from "./components/CardPositive";
import CardTotal from "./components/CardTotal";
import List from "./components/List";
import Modal from "./components/Modal";
import ModalButton from "./components/ModalButton";

function App() {
  return (
    <div>
      <Modal />
      <Header links={["Inicio", "Entradas", "Saidas"]} />
      <div className="d-flex justify-content-evenly mt-5">
        <CardNegative />
        <CardPositive />
        <CardTotal />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <List />
      </div>
      <ModalButton />
    </div>
  );
}

export default App;
