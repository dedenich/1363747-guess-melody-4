import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import QuestionGenre from "./QuestionGenre";

configure({adapter: new Adapter()});

const mockFn = jest.fn();

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `path`,
        genre: `rock`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `blues`,
      },
    ],
  },
};

it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
  const {question} = mock;
  const onAnswer = jest.fn((...args) => [...args]);
  const userAnswer = [false, true, false, false];

  const genreQuestion = mount(<QuestionGenre
    renderPlayer={mockFn}
    userAnswers={userAnswer}
    onAnswer={onAnswer}
    question={question}
    onChange={mockFn}
  />);

  const form = genreQuestion.find(`form`);
  const inputTwo = genreQuestion.find(`input`).at(1);

  inputTwo.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toEqual(void 0);

  expect(
      genreQuestion.find(`input`).map((it) => it.prop(`checked`))
  ).toEqual(userAnswer);
});
