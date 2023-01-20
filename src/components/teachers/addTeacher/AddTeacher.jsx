import { useRef, useState, useContext } from "react";
import AuthContext from "../../store/auth_context";

const AddTeacher = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const socialSecurityNumberRef = useRef();
  const phoneNumberRef = useRef();
  const emailRef = useRef();
  const areasOfExpertiseRef = useRef();

  const context = useContext(AuthContext);

  const onSaveHandler = (e) => {
    e.preventDefault();
    const newTeacher = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      socialSecurityNumber: socialSecurityNumberRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      areasOfExpertise: context.expArray,
    };
    context.addTeacher(newTeacher);
    context.resetModal();
  };

  return (
    <section className="container">
      <form onSubmit={onSaveHandler}>
        <div className="form-control">
          <label htmlFor="firstName">Förnamn</label>
          <input id="firstName" placeholder="Förnamn" ref={firstNameRef} />
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Efternamn</label>
          <input id="lastName" placeholder="Efternamn" ref={lastNameRef} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input id="email" placeholder="Email" ref={emailRef} />
        </div>
        <div className="form-control">
          <label htmlFor="socSecNo">Personnummer</label>
          <input
            id="socSecNo"
            placeholder="Personnummer"
            ref={socialSecurityNumberRef}
          />
        </div>
        <div className="form-control">
          <label htmlFor="phone">Telefonnummer</label>
          <input id="phone" placeholder="Telefonnummer" ref={phoneNumberRef} />
        </div>
        <div>
          <label htmlFor="expertise">Skriv in ett kompetensområde</label>
          <br></br>
          <div>
            <div id="wrapper">
              <input
                id="expertise"
                placeholder="Kompetenser"
                ref={areasOfExpertiseRef}
              />
              <button
                className="btn expBtn"
                onClick={(e) => {
                  e.preventDefault();

                  context.expArray.push(areasOfExpertiseRef.current.value);

                  let expWrapper = document.getElementById("expWrapper");
                  let span = document.createElement("span");
                  span.innerHTML = areasOfExpertiseRef.current.value;
                  expWrapper.append(span);
                  areasOfExpertiseRef.current.value = "";
                }}
              >
                Lägg till kompetens
              </button>
            </div>
            <div id="expWrapper"></div>
          </div>
        </div>
        <div className="save">
          <button className="btn ">Spara Lärare</button>
        </div>
      </form>
    </section>
  );
};

export default AddTeacher;
