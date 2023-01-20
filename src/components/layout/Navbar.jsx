import { Link } from "react-router-dom";
import { useState, useContext } from "react";

import AuthContext from "../store/auth_context";

const Navbar = () => {
  const context = useContext(AuthContext);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Startsida</Link>
        </li>
        <li>
          <Link to="/courses">Kurser</Link>
        </li>
        <li>
          <Link to="/teachers">Lärare</Link>
        </li>
        <li
          className="add"
          onClick={() => {
            context.setShowModal(true);
            context.setShowAddTeacherModal(true);
          }}
        >
          Lägg till lärare
        </li>
        <li
          className="add"
          onClick={() => {
            context.setShowModal(true);
            context.setShowAddCourseModal(true);
          }}
        >
          Lägg till kurs
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
