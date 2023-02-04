import React from "react";
import { useSelector } from "react-redux";
import { ReduxState } from "../store";
import Finance from "../utils/Finance";
import { FiDollarSign } from "react-icons/fi";

export default function CardTotal(): JSX.Element {
  const finances: Finance[] = useSelector((state: ReduxState) => {
    return state;
  });

  const total: number = finances.reduce((acc: number, index: Finance) => {
    return acc + index.value;
  }, 0);

  const formatedTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(total);

  return (
    <div className="card w-25 bg-dark text-center">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title text-white">Total</h5>
        <FiDollarSign size={30} color="#FFF"></FiDollarSign>
      </div>
      <div className="card-body">
        <p className="card-text text-white text-center fs-5 text">
          {formatedTotal}
        </p>
      </div>
    </div>
  );
}
