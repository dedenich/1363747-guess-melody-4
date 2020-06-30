import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import QuestionArtist from "../QuestionArtist/QuestionArtist.jsx";
import QuestionGenre from "../QuestionGenre/QuestionGenre.jsx";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen.jsx";
import {GameType} from "../../const.js";
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player.js";
import GameScreen from "../game-screen/game-screen.jsx";

const QuestionArtistWrapped = withAudioPlayer(QuestionArtist);
const QuestionGenreWrapped = withAudioPlayer(QuestionGenre);

class App extends PureComponent {
  _renderGameScreen() {
    const {
      maxMistakes,
      questions,
      onUserAnswer,
      onWelcomeButtonClick,
      step,
    } = this.props;
    const question = questions[step];
    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          mistakesCount={maxMistakes}
          handleClick={onWelcomeButtonClick}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen
              type={question.type}
            >
              <QuestionArtistWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen
              type={question.type}
            >
              <QuestionGenreWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
      }
    }
    return null;
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
            <QuestionArtistWrapped question={questions[1]} onAnswer={() => {}}/>
          </Route>
          <Route exact path="/genre">
            <QuestionGenreWrapped question={questions[0]} onAnswer={() => {}}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  maxMistakes: PropTypes.number,
  questions: PropTypes.array,
  onUserAnswer: PropTypes.func,
  onWelcomeButtonClick: PropTypes.func,
  step: PropTypes.number,
};

const mapStateToProps = (state) => ({
  step: state.step,
  maxMistakes: state.maxMistakes,
  questions: state.questions,
  a: state.a,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementMistake(question, answer));
    dispatch(ActionCreator.incrementStep());
  },
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
