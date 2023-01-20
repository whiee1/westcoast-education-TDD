import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  setTeacher: {},
  handleTeacherClick: () => {},
  teacher: {},

  setTeachers: [],
  teachers: [],
  getTeachers: () => {},

  addTeacher: () => {},

  expArray: [],

  courses: [],
  setCourses: [],
  course: {},
  setCourse: {},
  addCourse: () => {},
  getCourses: () => {},

  resetModal: () => {},
});

export const AuthContextProvider = (props) => {
  // Lärare
  const [teacher, setTeacher] = useState({});
  const [teachers, setTeachers] = useState([]);
  // Kurser
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({});

  // MODAL
  const [showAddTeacherModal, setShowAddTeacherModal] = useState(false);
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const expArray = [];

  const resetModal = () => {
    setShowModal(false);
    setShowAddCourseModal(false);
    setShowAddTeacherModal(false);
  };

  const getTeachers = () => {
    fetch("http://localhost:3011/teachers")
      .then((response) => response.json())
      .then((data) => setTeachers(data));
  };

  const addTeacher = (body) => {
    fetch("http://localhost:3011/teachers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    getTeachers();
  };

  const getCourses = () => {
    fetch("http://localhost:3011/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  };

  const addCourse = (body) => {
    fetch("http://localhost:3011/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    getCourses();
  };

  const handleTeacherClick = (teacher) => {
    setTeacher(teacher);
  };

  return (
    <AuthContext.Provider
      value={{
        handleTeacherClick: handleTeacherClick,
        setTeacher: setTeacher,
        teacher: teacher,

        setTeachers: setTeachers,
        teachers: teachers,
        getTeachers: getTeachers,
        addTeacher: addTeacher,
        expArray: expArray,

        courses: courses,
        setCourses: setCourses,
        course: course,
        setCourse: setCourse,
        getCourses: getCourses,
        addCourse: addCourse,

        showAddTeacherModal: showAddTeacherModal,
        setShowAddTeacherModal: setShowAddTeacherModal,
        showAddCourseModal: showAddCourseModal,
        setShowAddCourseModal: setShowAddCourseModal,

        showModal: showModal,
        setShowModal: setShowModal,

        resetModal: resetModal,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
