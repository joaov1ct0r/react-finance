import React from "react";
import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <header className="bg-dark w-full">
      <nav className="navbar navbar-expand">
        <div className="container">
          <h1 className="navbar-brand text-white">React Finance</h1>
          <ul className="navbar-nav mb-2">
            <li className="nav-item" key={"home"}>
              <Link to={"/"} className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item" key={"saidas"}>
              <Link to={"/saidas"} className="nav-link text-white">
                Saidas
              </Link>
            </li>
            <li className="nav-item" key={"entradas"}>
              <Link to={"/entradas"} className="nav-link text-white">
                Entradas
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
