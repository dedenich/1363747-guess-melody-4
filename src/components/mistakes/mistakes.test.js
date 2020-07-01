import React from 'react';
import renderer from 'react-test-renderer';
import Mistakes from './mistakes.jsx';

it(`renders correctly`, () => {
  const tree = renderer
  .create(<Mistakes
    count = {4}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
