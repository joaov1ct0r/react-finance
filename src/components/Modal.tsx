import React from "react";
import { AppDispatch } from "../store";
import Finance from "../utils/Finance";
import { createFinance } from "../store/reducers/financeSlicer";
import useForms from "../hooks/useForms";
import useAppDispatch from "../hooks/useAppDispatch";

export default function Modal(): JSX.Element {
  const dispatch: AppDispatch = useAppDispatch();

  const { handleSubmit, register, reset } = useForms();

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Crie nova finança
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form
            className="modal-body"
            onSubmit={handleSubmit((data: Finance) => {
              dispatch(createFinance(data));

              reset();
            })}
          >
            <span className="input-group-text mb-3" id="basic-addon2">
              Use o sinal de - para criar nova saida.
            </span>
            <div className="input-group mb-3">
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
                type="number"
                placeholder="Valor: R$100"
                className="form-control"
                required
              ></input>
            </div>

            <div className="input-group mb-3">
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
                type="string"
                placeholder="DD/MM/YYYY"
                className="form-control"
                required
              ></input>
            </div>

            <div className="input-group mb-3">
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
                className="form-control"
                required
              ></input>
            </div>

            <button
              type="button"
              className="btn btn-danger mx-2"
              data-bs-dismiss="modal"
              onClick={() => reset()}
            >
              Fechar
            </button>
            <button type="submit" className="btn btn-success">
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
