import React, { useState } from "react";
import Finance from "./utils/Finance";

function App() {
  const [values, setValues] = useState<Finance[]>([]);
  const [value, setValue] = useState<string>("");

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Valor gasto"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        <button
          type="submit"
          onClick={() => {
            setValues([...values, value]);
            setValue("");
          }}
        >
          Salvar
        </button>
      </div>

      <div>
        <ul>
          {values.map((value) => {
            return (
              <li key={value.id} id={String(value.id)}>
                Description: {value.description} | Valor: ${value.value} Data:{" "}
                {String(value.date)} |
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
