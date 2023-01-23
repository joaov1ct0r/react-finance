import React, { useState } from "react";

function App() {
  const [values, setValues] = useState<string[]>([]);
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
            return <li key={value}>${value}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
