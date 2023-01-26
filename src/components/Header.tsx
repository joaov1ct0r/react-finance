import React from "react";
import IHeaderProps from "../interfaces/IHeaderProps";

export default function Header({ links }: IHeaderProps): JSX.Element {
  return (
    <header className="bg-dark w-full">
      <nav className="navbar navbar-expand">
        <div className="container">
          <h1 className="navbar-brand text-white">React Finance</h1>
          <ul className="navbar-nav mb-2">
            {links.map((link: string) => {
              return (
                <li className="nav-item" key={link}>
                  <a className="nav-link text-white" href="#">
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
