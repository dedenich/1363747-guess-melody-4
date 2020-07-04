import React from 'react';
import WelcomeScreen from './WelcomeScreen';
import renderer from 'react-test-renderer';
import mockFn from "../../mocks/fn.js";

it(`renders correctly`, () => {
  const tree = renderer
  .create(<WelcomeScreen mistakesCount={3} handleClick={mockFn}/>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
