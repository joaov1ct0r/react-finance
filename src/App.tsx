import React, { useState } from "react";
import Finance from "./utils/Finance";
import { useForm } from "react-hook-form";

function App() {
  const [values, setValues] = useState<Finance[]>([]);
  const { register, handleSubmit, reset } = useForm<Finance>({
    defaultValues: {
      date: "",
      value: "" as unknown as number,
      description: "",
    },
  });

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          setValues([
            ...values,
            new Finance(data.description, data.value, data.date),
          ]);

          reset();
        })}
      >
        <input
          {...register("value", {
            required: {
              value: true,
              message: "Valor é obrigatorio",
            },
            pattern: /[0-9]{1,5}$/,
          })}
          type="text"
          placeholder="Valor gasto"
        ></input>

        <input
          {...register("date", {
            required: {
              value: true,
              message: "Data é obrigatorio",
            },
            pattern: /[0-9]{2,2}\/[0-9]{2,2}\/[0-9]{4,4}$/,
          })}
          type="text"
          placeholder="Data"
        ></input>

        <input
          {...register("description", {
            required: {
              value: true,
              message: "Descrição é obrigatorio",
            },
            pattern: /[a-z][A-Z]{1,100}$/gi,
          })}
          type="text"
          placeholder="Descrição"
        ></input>

        <button type="submit">Salvar</button>
      </form>

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
    </>
  );
}

export default App;
