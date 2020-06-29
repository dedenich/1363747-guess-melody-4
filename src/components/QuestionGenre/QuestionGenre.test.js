import React from 'react';
import QuestionGenre from './QuestionGenre';
import renderer from 'react-test-renderer';

const mock = {
  type: `genre`,
  genre: `jazz`,
  answers: [{
    src: `https://path`,
    genre: `rock`,
  }, {
    src: `https://path`,
    genre: `blues`,
  }, {
    src: `https://path`,
    genre: `jazz`,
  }, {
    src: `https://path`,
    genre: `rock`,
  }],
};

const mockFn = jest.fn();

it(`renders correctly`, () => {
  const tree = renderer
  .create(<QuestionGenre
    question={mock}
    onAnswer={mockFn}
    renderPlayer={jest.fn()}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
