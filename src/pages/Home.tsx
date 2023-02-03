import React, { useEffect } from "react";
import CardTotal from "../components/CardTotal";
import CardPositive from "../components/CardPositive";
import CardNegative from "../components/CardNegative";
import List from "../components/List";
import ModalButton from "../components/ModalButton";
import Modal from "../components/Modal";
import { useDispatch } from "react-redux";
import { createFinance } from "../store/reducers/financeSlicer";
import Finance from "../utils/Finance";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      createFinance({
        description: "teste2",
        value: 100,
        date: "15/09/2001",
      } as Finance)
    );
  }, []);
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
