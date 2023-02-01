import React from "react";
import Header from "./components/Header";
import Errors from "./components/Errors";
import States from "./states/states";
import CardNegative from "./components/CardNegative";
import CardPositive from "./components/CardPositive";
import CardTotal from "./components/CardTotal";
import List from "./components/List";
import Modal from "./components/Modal";
import ModalButton from "./components/ModalButton";

function App() {
  const { errors } = States();

  return (
    <div>
      {/* <Modal /> */}
      {/* <Header links={["Inicio", "Entradas", "Saidas"]} />
      {errors.date && <Errors message={errors.date.message} />}
      {errors.value && <Errors message={errors.value.message} />}
      {errors.description && <Errors message={errors.description.message} />}
      <div classNameName="d-flex justify-content-evenly mt-5">
        <CardNegative />
        <CardPositive />
        <CardTotal />
      </div>
      <div classNameName="d-flex justify-content-center mt-5">
        <List />
      </div> */}
      <ModalButton />

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
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
