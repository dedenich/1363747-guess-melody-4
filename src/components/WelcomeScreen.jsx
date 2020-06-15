import React from "react";
import PropTypes from "prop-types";

const WelcomeScreen = (props) => {
  const {mistakesCount} = props;
  return <div>
    <h1>Правила игры</h1>
    <p>{mistakesCount} Ошибок</p>
    <button>Старт</button>
  </div>;
};

WelcomeScreen.propTypes = {
  mistakesCount: PropTypes.number.isRequired,
};

export default WelcomeScreen;
