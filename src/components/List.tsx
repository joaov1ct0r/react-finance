import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, ReduxState } from "../store";
import Finance from "../utils/Finance";
import { editFinance, deleteFinance } from "../store/reducers/financeSlicer";
import { FiTrash, FiEdit2 } from "react-icons/fi";

export default function List(): JSX.Element {
  const finances: Finance[] = useSelector((state: ReduxState) => {
    return state;
  });

  const dispatch: AppDispatch = useDispatch();

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
            <tr className="text-center text-danger" key={finance.id}>
              <td>R${finance.value}</td>
              <td>{finance.date}</td>
              <td>{finance.description}</td>
              <td>
                <button>
                  <FiEdit2 size={20}></FiEdit2>
                </button>{" "}
                <button
                  id={String(finance.id)}
                  className="border border-white bg-danger text-white"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();

                    dispatch(deleteFinance(Number(e.currentTarget.id)));
                  }}
                >
                  <FiTrash size={20}></FiTrash>
                </button>
              </td>
            </tr>
          ) : (
            <tr className="text-center text-success" key={finance.id}>
              <td>R${finance.value}</td>
              <td>{finance.date}</td>
              <td>{finance.description}</td>
              <td>
                <button
                  id={String(finance.id)}
                  className="border border-white bg-warning text-white"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                  }}
                >
                  <FiEdit2 size={20}></FiEdit2>
                </button>{" "}
                <button
                  id={String(finance.id)}
                  className="border border-white bg-danger text-white"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();

                    dispatch(deleteFinance(Number(e.currentTarget.id)));
                  }}
                >
                  <FiTrash size={20}></FiTrash>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
