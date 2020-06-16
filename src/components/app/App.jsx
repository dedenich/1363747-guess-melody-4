import React from "react";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen.jsx";
import PropTypes from "prop-types";

const App = ({mistakesCount}) => {
  return <div>
    <WelcomeScreen
      mistakesCount={mistakesCount}
    />
  </div>;
};

App.propTypes = {
  mistakesCount: PropTypes.number.isRequired,
};

export default App;
