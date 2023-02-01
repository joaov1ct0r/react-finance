import React from "react";
import { useSelector } from "react-redux";
import { ReduxState } from "../store";
import Finance from "../utils/Finance";
import { FiArrowDownCircle } from "react-icons/fi";

export default function CardNegative(): JSX.Element {
  const finances: Finance[] = useSelector((state: ReduxState) => {
    return state;
  });

  const total: number = finances.reduce((acc: number, index: Finance) => {
    return index.value < 0 ? acc + index.value : acc + 0;
  }, 0);

  return (
    <div className="card w-25 bg-danger text-center">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title text-white">Saidas</h5>
        <FiArrowDownCircle size={30} color="#FFF"></FiArrowDownCircle>
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
