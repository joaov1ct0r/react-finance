import React, { useState } from "react";
import Finance from "./utils/Finance";
import Header from "./components/Header";
import Errors from "./components/Errors";
import States from "./states/states";

function App() {
  const [values, setValues] = useState<Finance[]>([]);

  const { errors } = States();

  return (
    <div>
      <Header links={["Inicio", "Entradas", "Saidas", "Editar", "Deletar"]} />
      {errors.date && <Errors message={errors.date.message} />}
      {errors.value && <Errors message={errors.value.message} />}
      {errors.description && <Errors message={errors.description.message} />}
      <div>
        <ul>
          {values.map((value) => {
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
