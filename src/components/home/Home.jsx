import { useContext, useEffect, useState } from "react";
import AuthContext from "../store/auth_context";

const Home = () => {
  const context = useContext(AuthContext);

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3011/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <section className="home page">
      <h1>Våra kurser</h1>

      <section className="homeList">
        {courses.map((course, i) => {
          const { courseName, duration, start, description } = course;

          return (
            <article className="homeListItemContainer " key={i}>
              <ul className="list">
                <li className="bigger">{courseName}</li>

                <li>Längd: {duration}</li>
                <li>Start: {start}</li>
              </ul>

              <p className="description"> {description}</p>
            </article>
          );
        })}
      </section>
    </section>
  );
};
export default Home;
