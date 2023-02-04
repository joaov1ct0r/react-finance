import React from "react";
import Header from "../components/Header";
import ListEach from "../components/ListEach";
import ModalButton from "../components/ModalButton";
import Modal from "../components/Modal";
import CardNegative from "../components/CardNegative";

export default function Saidas(): JSX.Element {
  return (
    <div>
      <Header links={["Inicio", "Entradas"]} />
      <div className="d-flex justify-content-evenly mt-5">
        <CardNegative />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <ListEach type="negative" />
      </div>
      <ModalButton />
      <Modal />
    </div>
  );
}
