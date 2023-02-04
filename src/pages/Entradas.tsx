import React from "react";
import Header from "../components/Header";
import CardPositive from "../components/CardPositive";
import ModalButton from "../components/ModalButton";
import Modal from "../components/Modal";
import ListPositive from "../components/ListPositive";

export default function Entradas(): JSX.Element {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-evenly mt-5">
        <CardPositive />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <ListPositive />
      </div>
      <ModalButton />
      <Modal />
    </div>
  );
}
