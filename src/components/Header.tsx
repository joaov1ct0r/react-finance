import React from "react";

export default function Header(): JSX.Element {
  return (
    <header className="bg-dark w-full">
      <nav className="navbar navbar-expand">
        <div className="container">
          <h1 className="navbar-brand text-white">React Finance</h1>
          <ul className="navbar-nav mb-2">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Nova Finança
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Finanças
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Editar Finança
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Deletar Finança
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
