import React from "react";
import IErrorsProps from "../interfaces/IErrorsProps";

export default function Errors({ message }: IErrorsProps): JSX.Element {
  return <div className="alert alert-danger fixed-bottom">{message}</div>;
}
