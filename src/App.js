import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TeacherList from "./components/teachers/teacherList/TeacherList";
import CourseList from "./components/courses/courseList/CourseList";
import Navbar from "./components/layout/Navbar";
import AddTeacher from "./components/teachers/addTeacher/AddTeacher";
import AddCourse from "./components/courses/addCourse/AddCourse";
import Teacher from "./components/teachers/Teacher";
import Modal from "./components/ui/Modal";
import { useContext, useState } from "react";
import AuthContext from "./components/store/auth_context";
import Course from "./components/courses/Course";
import Home from "./components/home/Home";
function App() {
  const context = useContext(AuthContext);
  return (
    <Router>
      <main className="App">
        <Navbar />

        {context.showModal ? (
          <Modal
            item={context.showAddTeacherModal ? <AddTeacher /> : <AddCourse />}
            title={
              context.showAddTeacherModal
                ? "Lägg till lärare"
                : "Lägg till kurs"
            }
          />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/teachers" element={<TeacherList />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/course" element={<Course />} />
          </Routes>
        )}
      </main>
    </Router>
  );
}

export default App;
