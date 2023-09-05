import "./Nav.css"
import React from "react"
import { Link } from "react-router-dom"

export default props =>
  <aside className="menu-area">
    <nav className="menu">
      <Link to="/">
        <i class="fa-solid fa-house"></i> Inicio
      </Link>
      <Link to="/users">
        <i class="fa-solid fa-users"></i> Usuário
      </Link>
    </nav>
  </aside>