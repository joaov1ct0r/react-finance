import React from "react";
import CardTotal from "../components/CardTotal";
import CardPositive from "../components/CardPositive";
import CardNegative from "../components/CardNegative";
import List from "../components/List";
import ModalButton from "../components/ModalButton";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div>
      <div className="d-flex justify-content-evenly mt-5">
        <CardNegative />
        <CardPositive />
        <CardTotal />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <List />
      </div>
      <ModalButton />
      <Modal />
    </div>
  );
}
