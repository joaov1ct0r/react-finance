import React from "react";
import Header from "./components/Header";
import Errors from "./components/Errors";
import States from "./states/states";
import CardNegative from "./components/CardNegative";
import CardPositive from "./components/CardPositive";
import CardTotal from "./components/CardTotal";
import List from "./components/List";

function App() {
  const { errors } = States();

  return (
    <div>
      <Header links={["Inicio", "Entradas", "Saidas"]} />
      {errors.date && <Errors message={errors.date.message} />}
      {errors.value && <Errors message={errors.value.message} />}
      {errors.description && <Errors message={errors.description.message} />}
      <div className="d-flex justify-content-evenly mt-3">
        <CardNegative />
        <CardPositive />
        <CardTotal />
      </div>
      <div className="d-flex justify-content-center">
        <List />
      </div>
    </div>
  );
}

export default App;
