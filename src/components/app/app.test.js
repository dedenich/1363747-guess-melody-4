import React from 'react';
import {App} from './App';
import renderer from 'react-test-renderer';
import questions from "../../mocks/questions.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

it(`Render WelcomeScreen`, () => {
  const store = mockStore({
    mistakes: 0,
  });
  const tree = renderer
    .create(<Provider store={store}>
      <App
        maxMistakes={3}
        questions={questions}
        onUserAnswer={() => {}}
        onWelcomeButtonClick={() => {}}
        step={-1}
      />
    </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
