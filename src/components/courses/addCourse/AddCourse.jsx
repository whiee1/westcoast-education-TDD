import { useRef, useState, useContext } from "react";
import AuthContext from "../../store/auth_context";

const AddCourse = () => {
  const courseNumberRef = useRef();
  const courseNameRef = useRef();
  const durationRef = useRef();

  const descriptionRef = useRef();
  const startRef = useRef();

  const context = useContext(AuthContext);

  const onSaveHandler = (e) => {
    e.preventDefault();
    const newCourse = {
      courseNumber: courseNumberRef.current.value,
      courseName: courseNameRef.current.value,
      duration: durationRef.current.value,
      description: descriptionRef.current.value,
      start: startRef.current.value,
    };
    context.addCourse(newCourse);
    context.resetModal();
  };

  return (
    <section className="container">
      <form onSubmit={onSaveHandler}>
        <div className="form-control">
          <label htmlFor="courseNumber">Kursnummer</label>
          <input
            id="courseNumber"
            placeholder="Kursnummer"
            ref={courseNumberRef}
          />
        </div>
        <div className="form-control">
          <label htmlFor="courseName">Kursnamn</label>
          <input id="courseName" placeholder="Kursnamn" ref={courseNameRef} />
        </div>
        <div className="form-control">
          <label htmlFor="duration">Längd</label>
          <input id="duration" placeholder="Längd" ref={durationRef} />
        </div>
        <div className="form-control">
          <label htmlFor="description">Kurs Beskrivning</label>
          <input
            id="description"
            placeholder="Kurs Beskrivning"
            ref={descriptionRef}
          />
        </div>
        <div className="form-control">
          <label htmlFor="start">Kursstart</label>
          <input id="start" placeholder="Kursstart" ref={startRef} />
        </div>

        <div className="save">
          <button className="btn ">Spara Kurs</button>
        </div>
      </form>
    </section>
  );
};

export default AddCourse;
