import { Link } from "react-router-dom";
import AuthContext from "../store/auth_context";
import { useContext } from "react";

const Teacher = () => {
  const context = useContext(AuthContext);

  const {
    firstName,
    lastName,
    socialSecurityNumber,
    email,
    phoneNumber,
    areasOfExpertise,
    id,
  } = context.teacher;

  return (
    <article className="page">
      <button className="btn">
        <Link to="/teachers">Gå Tillbaka</Link>
      </button>

      <h1>
        {firstName} {lastName}
      </h1>
      <div key={id}>
        <ul>
          <li>Personnummer: {socialSecurityNumber}</li>
          <li>
            Email:
            {email}
          </li>
          <li>
            Telefon:
            {phoneNumber}
          </li>
        </ul>
        <h2>Kompetensområden:</h2>
        <ul>
          {areasOfExpertise?.map((exp) => {
            return <li>{exp}</li>;
          })}
        </ul>
      </div>
    </article>
  );
};

export default Teacher;
