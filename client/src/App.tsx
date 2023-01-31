import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AskQuestion from "./components/templates/AskQuestionPage";
import Home from "./components/templates/Home";
import Login from "./components/templates/Login";
import QuestionPage from "./components/templates/QuestionPage";
import Signup from "./components/templates/Signup";
import { LayoutRoute } from "../src/components/templates/LayoutRoute";
import { BaseRoute } from "../src/components/templates/BaseRoute";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App ">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<LayoutRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/questions/:id" element={<QuestionPage />} />
          </Route>

          <Route element={<BaseRoute />}>
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/askquestion" element={<AskQuestion />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
