import React from "react";
import { useSelector } from "react-redux";
import { ReduxState } from "../store";
import Finance from "../utils/Finance";
import { FiArrowUpCircle } from "react-icons/fi";

export default function CardPositive(): JSX.Element {
  const finances: Finance[] = useSelector((state: ReduxState) => {
    return state;
  });

  const total: number = finances.reduce((acc: number, index: Finance) => {
    return index.value >= 0 ? acc + index.value : acc + 0;
  }, 0);

  return (
    <div className="card w-25 bg-success text-center">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title text-white">Entradas</h5>
        <FiArrowUpCircle size={30} color="#FFF"></FiArrowUpCircle>
      </div>
      <div className="card-body">
        <p className="card-text text-white text-center fs-5 text">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(total)}
        </p>
      </div>
    </div>
  );
}
