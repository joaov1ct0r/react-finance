import React, { useState } from "react";
import Finance from "./utils/Finance";
import { useForm } from "react-hook-form";
import Header from "./components/Header";

function App() {
  const [values, setValues] = useState<Finance[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Finance>({
    defaultValues: {
      date: "",
      value: "" as unknown as number,
      description: "",
    },
  });

  return (
    <div className="container">
      <Header
        links={[
          "Lista",
          "Criar entrada",
          "Criar saida",
          "Editar finanças",
          "Deletar finanças",
        ]}
      />
      {errors.date && (
        <div className="alert alert-danger">{errors.date.message}</div>
      )}
      {errors.value && (
        <div className="alert alert-danger">{errors.value.message}</div>
      )}
      {errors.description && (
        <div className="alert alert-danger">{errors.description.message}</div>
      )}
      <form
        onSubmit={handleSubmit((data) => {
          setValues([
            ...values,
            new Finance(data.description, data.value, data.date),
          ]);

          reset();
        })}
        className="margin-auto"
      >
        <input
          {...register("value", {
            required: {
              value: true,
              message: "Valor é obrigatorio",
            },
            pattern: {
              value: /[0-9]{1,5}$/,
              message: "Valor Invalido",
            },
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
            pattern: {
              value: /[0-9]{2,2}\/[0-9]{2,2}\/[0-9]{4,4}$/,
              message: "Data Invalida",
            },
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
            pattern: {
              value: /[a-z][A-Z]{1,100}$/gi,
              message: "Descrição invalida",
            },
          })}
          type="text"
          placeholder="Descrição"
        ></input>

        <button className="btn btn-primary" type="submit">
          Salvar
        </button>
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
    </div>
  );
}

export default App;
