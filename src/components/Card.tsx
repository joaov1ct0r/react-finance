import React from "react";
import { useSelector } from "react-redux";
import { ReduxState } from "../store";
import Finance from "../utils/Finance";

interface ICardProps {
  type?: string;
}

export default function Card({ type }: ICardProps): JSX.Element {
  const finances: Finance[] = useSelector((state: ReduxState) => {
    return state;
  });

  const total = finances.reduce((acc: number, index: Finance) => {
    if (type === "negative" && index.value < 0) {
      return acc + index.value;
    } else {
      return acc + index.value;
    }
  }, 0);

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">
          {type === "negative" ? "Saidas" : "Entradas"}
        </h5>
      </div>
      <div className="card-body">
        <p className="card-text">
          {type === "negative" ? `R$ -${total}` : `R$ ${total}`}
        </p>
      </div>
    </div>
  );
}
