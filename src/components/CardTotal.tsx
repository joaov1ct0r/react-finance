import React from "react";
import { useSelector } from "react-redux";
import { ReduxState } from "../store";
import Finance from "../utils/Finance";

export default function CardTotal(): JSX.Element {
  const finances: Finance[] = useSelector((state: ReduxState) => {
    return state;
  });

  const total: number = finances.reduce((acc: number, index: Finance) => {
    return acc + index.value;
  }, 0);

  return (
    <div className="card w-25 bg-success text-center">
      <div className="card-header">
        <h5 className="card-title text-white">Total</h5>
      </div>
      <div className="card-body">
        <p className="card-text text-white text-center fs-5 text">R$ {total}</p>
      </div>
    </div>
  );
}
