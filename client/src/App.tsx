import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import AskQuestion from "./components/AskQuestionBar";
import Home from "./components/Home";
import Login from "./components/Login";
import QuestionPage from "./components/QuestionPage";
import RegisterUser from "./components/RegisterUser";
import { BaseRoute, LayoutRoute } from "./utils/Routes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<LayoutRoute />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<BaseRoute />}>
          <Route path="/signin" element={<Login />} />
          <Route path="/askquestion" element={<AskQuestion />} />
          <Route path="/questions/:id" element={<QuestionPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
