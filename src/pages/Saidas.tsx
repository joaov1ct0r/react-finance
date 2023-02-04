import React from "react";
import Header from "../components/Header";
import ModalButton from "../components/ModalButton";
import Modal from "../components/Modal";
import CardNegative from "../components/CardNegative";
import ListNegative from "../components/ListNegative";

export default function Saidas(): JSX.Element {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-evenly mt-5">
        <CardNegative />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <ListNegative />
      </div>
      <ModalButton />
      <Modal />
    </div>
  );
}
