import React from 'react';
import QuestionArtist from './QuestionArtist';
import renderer from 'react-test-renderer';
import mockFn from "../../mocks/fn.js";

const mock = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://path`,
  },
  answers: [{
    picture: `https://pictpath`,
    artist: `John Snow`,
  }, {
    picture: `https://pictpath`,
    artist: `Jack Daniels`,
  }, {
    picture: `https://pictpath`,
    artist: `Jim Beam`,
  }],
};

it(`renders correctly`, () => {
  const tree = renderer
  .create(<QuestionArtist
    question={mock}
    onAnswer={mockFn}
    renderPlayer={mockFn}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
