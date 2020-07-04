import React from 'react';
import {App} from './App';
import renderer from 'react-test-renderer';
import questions from "../../mocks/questions.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import mockFn from "../../mocks/fn.js";

const mockStore = configureStore([]);

it(`Render WelcomeScreen`, () => {
  const store = mockStore({
    mistakes: 0,
  });
  const tree = renderer
    .create(<Provider store={store}>
      <App
        maxMistakes={3}
        mistakes={0}
        questions={questions}
        onUserAnswer={mockFn}
        onWelcomeButtonClick={mockFn}
        resetGame={mockFn}
        step={-1}
      />
    </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Render GameOverScreen`, () => {
  const store = mockStore({
    mistakes: 3,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            maxMistakes={3}
            mistakes={3}
            questions={questions}
            onUserAnswer={mockFn}
            onWelcomeButtonClick={mockFn}
            resetGame={mockFn}
            step={1}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render WinScreen`, () => {
  const store = mockStore({
    mistakes: 3,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            maxMistakes={3}
            mistakes={0}
            questions={questions}
            onUserAnswer={mockFn}
            onWelcomeButtonClick={mockFn}
            resetGame={mockFn}
            step={3}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
