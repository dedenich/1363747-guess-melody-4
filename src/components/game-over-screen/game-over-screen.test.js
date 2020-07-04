import React from "react";
import renderer from "react-test-renderer";
import GameOverScreen from "./game-over-screen.jsx";
import mockFn from "../../mocks/fn.js";

it(`Should GameOverScreen render correctly`, () => {
  const tree = renderer
    .create(<GameOverScreen
      onReplayButtonClick={mockFn}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
