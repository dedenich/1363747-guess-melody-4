import React from "react";
// import ReactDOM from "react-dom";
import WelcomeScreen from "./WelcomeScreen.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {mistakesCount} = props;
  return <div>
    <WelcomeScreen mistakesCount={mistakesCount}/>
  </div>;
};

export default App;
