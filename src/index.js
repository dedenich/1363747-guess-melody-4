import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App.jsx";

ReactDOM.render(
    <App
      mistakesCount={5}
    />,
    document.getElementById(`root`)
);
