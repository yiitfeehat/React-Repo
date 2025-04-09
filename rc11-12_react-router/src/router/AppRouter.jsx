import React from "react";
import Home from "../pages/Home";
import MyNavbar from "../components/MyNavbar";
import Teacher from "../pages/Teacher";
import CourseCard from "../pages/CourseCard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactForm from "../pages/ContactForm";
import NotFound from "../pages/NotFound";
import Paths from "../pages/Paths";
import CardDetails from "../pages/CardDetails";
import TeacherDetails from "../pages/TeacherDetails";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <Router>
      <MyNavbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacher/:id" element={<TeacherDetails />} />


        <Route path="/login" element={<Login/>} />


        <Route path="/courses" element={<CourseCard />} />
        <Route path="/courses/:namee" element={<CardDetails />} />

        {/* Şifre kontrolü ile girilebilecek sayfalar için önce PrivateRouter a git */}
        {/* <Route path="/contact" element={<ContactForm />} /> */}

        <Route path="/contact" element={<PrivateRouter />}>
          <Route path="" element={<ContactForm />} />
        </Route>
        <Route path="/paths" element={<Paths />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
