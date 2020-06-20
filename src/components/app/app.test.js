import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import questions from "../../mocks/questions.js";

it(`renders correctly`, () => {
  const tree = renderer
  .create(<App mistakesCount={3}
    questions={questions}/>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
