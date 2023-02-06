import React from "react";
import { AppDispatch } from "../store";
import Finance from "../utils/Finance";
import { deleteFinance } from "../store/reducers/financeSlicer";
import { FiTrash } from "react-icons/fi";
import useFinance from "../hooks/useFinance";
import useAppDispatch from "../hooks/useAppDispatch";

export default function ListNegative(): JSX.Element {
  const finances: Finance[] = useFinance();

  const dispatch: AppDispatch = useAppDispatch();

  return (
    <table className="table bg-white w-75 mt-3 border border-dark">
      <thead className="text-center">
        <tr>
          <th scope="col">Valor</th>
          <th scope="col">Data</th>
          <th scope="col">Descrição</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>

      <tbody>
        {finances.map((finance: Finance) => {
          return finance.type === "negative" ? (
            <tr
              className="text-center text-danger"
              key={finance.id}
              id={finance.id}
            >
              <td>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(finance.value)}
              </td>
              <td>{finance.date}</td>
              <td>{finance.description}</td>
              <td>
                <button
                  id={finance.id}
                  className="border border-white bg-danger text-white"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();

                    console.log(e.currentTarget.parentElement?.parentElement);

                    dispatch(deleteFinance(e.currentTarget.id));
                  }}
                >
                  <FiTrash size={20}></FiTrash>
                </button>
              </td>
            </tr>
          ) : (
            <></>
          );
        })}
      </tbody>
    </table>
  );
}
