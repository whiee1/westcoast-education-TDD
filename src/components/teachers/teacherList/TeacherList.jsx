import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../store/auth_context";

const TeacherList = () => {
  const context = useContext(AuthContext);

  useEffect(() => {
    context.getTeachers();
  }, []);

  return (
    <section className="page">
      <h1>Lärare</h1>

      <article className="teacherList">
        {context.teachers?.map((teacher, i) => {
          const {
            firstName,
            lastName,
            socialSecurityNumber,
            email,
            phoneNumber,
          } = teacher;
          return (
            <article className="teacherContainer listContainer" key={i}>
              <ul className="list">
                <Link to="/teacher">
                  <li
                    className="bigger"
                    onClick={() => {
                      context.handleTeacherClick(teacher);
                    }}
                  >
                    {firstName} {lastName}
                  </li>
                </Link>
                <li>Personnummer: {socialSecurityNumber}</li>
                <li>Email: {email}</li>
                <li>Telefon: {phoneNumber}</li>
              </ul>
            </article>
          );
        })}
      </article>
    </section>
  );
};

export default TeacherList;
