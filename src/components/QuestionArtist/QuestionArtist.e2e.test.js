import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import QuestionArtist from "./QuestionArtist";

configure({adapter: new Adapter()});

const mock = {
  question: {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: `http://path`,
      artist: `John Snow`,
    }, {
      picture: `http://path`,
      artist: `Jack Daniels`,
    }, {
      picture: `http://path`,
      artist: `Jim Beam`,
    }],
  }
};

it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
  const {question} = mock;
  const onAnswer = jest.fn((...args) => [...args]);
  const userAnswer = mock.question.answers[1];

  const artistQuestion = shallow(<QuestionArtist
    onAnswer={onAnswer}
    question={question}
    renderPlayer={jest.fn()}
  />);

  const inputs = artistQuestion.find(`input`);
  const inputTwo = inputs.at(1);

  inputTwo.simulate(`change`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
