import { Link } from "react-router-dom";
import AuthContext from "../store/auth_context";
import { useState, useEffect, useContext } from "react";

const Course = () => {
  const context = useContext(AuthContext);

  const { courseName, courseNumber, duration, start, description } =
    context.course;

  return (
    <article className="detailPage page">
      <button className="btn">
        <Link to="/courses">Gå Tillbaka</Link>
      </button>
      <h1>{courseName}</h1>
      <section>
        <ul>
          <li>Kursnummer: {courseNumber}</li>
          <li>
            Kurslängd:
            {duration}
          </li>
          <li>
            Kursstart:
            {start}
          </li>
        </ul>
        <section className="description">
          <h2>Om Kursen</h2>
          <p> {description}</p>
        </section>
      </section>
    </article>
  );
};
export default Course;
