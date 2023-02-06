import React from "react";
import Finance from "../utils/Finance";
import { FiArrowUpCircle } from "react-icons/fi";
import useFinance from "../hooks/useFinance";

export default function CardPositive(): JSX.Element {
  const finances: Finance[] = useFinance();

  const total = finances.reduce((acc: number, index: Finance) => {
    return index.value >= 0 ? acc + index.value : acc;
  }, 0);

  const formatedTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(total);

  return (
    <div className="card w-25 bg-success text-center">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="card-title text-white">Entradas</h5>
        <FiArrowUpCircle size={30} color="#FFF"></FiArrowUpCircle>
      </div>
      <div className="card-body">
        <p className="card-text text-white text-center fs-5 text">
          {formatedTotal}
        </p>
      </div>
    </div>
  );
}
