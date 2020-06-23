import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App.jsx";
import questions from "./mocks/questions.js";

ReactDOM.render(
    <App
      mistakesCount={5}
      questions={questions}
    />,
    document.getElementById(`root`)
);
