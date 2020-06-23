import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import QuestionArtist from "../QuestionArtist/QuestionArtist.jsx";
import QuestionGenre from "../QuestionGenre/QuestionGenre.jsx";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen.jsx";
import {GameType} from "../../const.js";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };
  }

  // eslint-disable-next-line consistent-return
  _renderGameScreen() {
    const {mistakesCount, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          mistakesCount={mistakesCount}
          handleClick={() => {
            this.setState({
              step: 0,
            });
          }}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <QuestionArtist
              question={question}
              onAnswer={() => {
                this.setState((prevState) => ({
                  step: prevState.step + 1,
                }));
              }}
            />
          );
        case GameType.GENRE:
          return (
            <QuestionGenre
              question={question}
              onAnswer={() => {
                this.setState((prevState) => ({
                  step: prevState.step + 1,
                }));
              }}
            />
          );
      }
    }
  }

  render() {
    const {questions} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/artist">
            <QuestionArtist question={questions[1]} onAnswer={() => {}}/>
          </Route>
          <Route exact path="/genre">
            <QuestionGenre question={questions[0]} onAnswer={() => {}}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  mistakesCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
