import React from "react";
import { useSelector } from "react-redux";
import { ReduxState } from "../store";
import Finance from "../utils/Finance";

export default function List(): JSX.Element {
  const finances: Finance[] = useSelector((state: ReduxState) => {
    return state;
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Valor</th>
          <th scope="col">Data</th>
          <th scope="col">Descrição</th>
        </tr>
      </thead>

      <tbody>
        {finances.map((finance: Finance) => {
          return (
            <tr key={finance.id}>
              <td>{finance.value}</td>
              <td>{finance.date}</td>
              <td>{finance.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
