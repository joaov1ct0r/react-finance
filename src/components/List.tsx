import React from "react";
import { useSelector } from "react-redux";
import { ReduxState } from "../store";
import Finance from "../utils/Finance";

export default function List(): JSX.Element {
  const finances: Finance[] = useSelector((state: ReduxState) => {
    return state;
  });

  return (
    <table className=" table bg-white w-75 mt-3 border border-dark">
      <thead>
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
            <tr className="bg-danger text-white" key={finance.id}>
              <td>R${finance.value}</td>
              <td>{finance.date}</td>
              <td>{finance.description}</td>
              <td>
                <button>Edit</button> <button>Delete</button>
              </td>
            </tr>
          ) : (
            <tr className="bg-success text-white" key={finance.id}>
              <td>R${finance.value}</td>
              <td>{finance.date}</td>
              <td>{finance.description}</td>
              <td>
                <button>Edit</button> <button>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
