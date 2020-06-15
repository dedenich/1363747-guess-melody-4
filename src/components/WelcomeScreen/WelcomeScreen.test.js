import React from 'react';
import WelcomeScreen from './WelcomeScreen';
import renderer from 'react-test-renderer';

const f = () => {
  // eslint-disable-next-line no-console
  console.log(`click`);
};

it(`renders correctly`, () => {
  const tree = renderer
  .create(<WelcomeScreen mistakesCount={3} handleClick={f}/>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
