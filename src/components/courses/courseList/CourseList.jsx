import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth_context";

const CourseList = () => {
  const context = useContext(AuthContext);

  useEffect(() => {
    context.getCourses();
  }, []);

  return (
    <>
      <section>
        <h1>Kurser</h1>

        <article className="courseList">
          {context.courses?.map((course, i) => {
            const { courseName, courseNumber, duration, start, description } =
              course;

            return (
              <article
                className="courseListItemContainer listContainer page"
                key={i}
              >
                <ul className="list">
                  <Link to="/course">
                    <li
                      className="bigger"
                      onClick={() => {
                        context.setCourse(course);
                      }}
                    >
                      {courseName}
                    </li>
                  </Link>
                  <li>Kursnummer: {courseNumber}</li>
                  <li>Längd: {duration}</li>
                  <li>Start: {start}</li>
                </ul>
              </article>
            );
          })}
        </article>
      </section>
    </>
  );
};

export default CourseList;
