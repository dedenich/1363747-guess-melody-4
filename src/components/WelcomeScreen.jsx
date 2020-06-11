import React from "react";

const WelcomeScreen = (props) => {
  // eslint-disable-next-line react/prop-types
  const {mistakesCount} = props;
  return <div>
    <h1>Правила игры</h1>
    <p>{mistakesCount} Ошибок</p>
    <button>Старт</button>
  </div>;
};

export default WelcomeScreen;
