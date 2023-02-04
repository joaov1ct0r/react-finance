import React from "react";
import Header from "../components/Header";
import CardPositive from "../components/CardPositive";
import ListEach from "../components/ListEach";
import ModalButton from "../components/ModalButton";
import Modal from "../components/Modal";

export default function Entradas(): JSX.Element {
  return (
    <div>
      <Header links={["Inicio", "Saidas"]} />
      <div className="d-flex justify-content-evenly mt-5">
        <CardPositive />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <ListEach type="positive" />
      </div>
      <ModalButton />
      <Modal />
    </div>
  );
}
