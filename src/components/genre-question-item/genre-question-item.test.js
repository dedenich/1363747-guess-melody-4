import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionItem from "./genre-question-item.jsx";
import mockFn from "../../mocks/fn.js";

const mockAnswer = {
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  genre: `rock`,
};

it(`GenreQuestionItem is rendered correctly`, () => {
  const tree = renderer.create((
    <GenreQuestionItem
      answer={mockAnswer}
      id={0}
      onChange={mockFn}
      renderPlayer={mockFn}
      userAnswer={false}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
