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
      <Header links={["Inicio", "Entradas", "Saidas"]} />
      <CardNegative />
      <CardPositive />
      <CardTotal />
      <List />
      <ModalButton />
      <Modal />
    </div>
  );
}

export default App;
