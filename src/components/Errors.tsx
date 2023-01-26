import React from "react";

interface IErrorsProps {
  message?: string;
}

export default function Errors({ message }: IErrorsProps): JSX.Element {
  return <div className="alert alert-danger fixed-bottom">{message}</div>;
}
