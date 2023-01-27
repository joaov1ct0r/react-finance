import React from "react";
import Finance from "./utils/Finance";
import Header from "./components/Header";
import Errors from "./components/Errors";
import States from "./states/states";
import { useSelector } from "react-redux";
import { ReduxState } from "./store";

function App() {
  const finances: Finance[] = useSelector((state: ReduxState) => {
    return state;
  });

  const { errors } = States();

  return (
    <div>
      <Header links={["Inicio", "Entradas", "Saidas", "Editar", "Deletar"]} />
      {errors.date && <Errors message={errors.date.message} />}
      {errors.value && <Errors message={errors.value.message} />}
      {errors.description && <Errors message={errors.description.message} />}
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
