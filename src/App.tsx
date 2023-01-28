import React from "react";
import Finance from "./utils/Finance";
import Header from "./components/Header";
import Errors from "./components/Errors";
import States from "./states/states";
import { useSelector } from "react-redux";
import { ReduxState } from "./store";
import CardNegative from "./components/CardNegative";
import CardPositive from "./components/CardPositive";
import CardTotal from "./components/CardTotal";

function App() {
  const finances: Finance[] = useSelector((state: ReduxState) => {
    return state;
  });

  const { errors } = States();

  return (
    <div className="bg-dark-subtle">
      <Header links={["Inicio", "Entradas", "Saidas"]} />
      {errors.date && <Errors message={errors.date.message} />}
      {errors.value && <Errors message={errors.value.message} />}
      {errors.description && <Errors message={errors.description.message} />}
      <div className="d-flex justify-content-evenly mt-3">
        <CardNegative />
        <CardPositive />
        <CardTotal />
      </div>
      <div>
        <ul>
          {finances.map((value) => {
            return (
              <li key={value.id} id={String(value.id)}>
                Description: {value.description} | Valor: ${value.value} | Data:{" "}
                {String(value.date)} |
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
