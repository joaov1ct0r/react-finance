import React from "react";
import Finance from "../utils/Finance";
import { register, handleSubmit, reset } from "../states/states";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { createFinance } from "../store/reducers/financeSlicer";

export default function Form(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();

  return (
    <form
      onSubmit={handleSubmit((data: Finance) => {
        const finance = new Finance(data.description, data.value, data.date);

        dispatch(createFinance(finance));

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
  );
}
