import React from 'react';
import AudioPlayer from './AudioPlayer.jsx';
import renderer from 'react-test-renderer';

const mockPath = `path`;
const f = jest.fn();

it(`AudioPlayer is rendered correctly`, () => {

  const tree = renderer.create(<AudioPlayer
    isPlaying={false}
    onPlayButtonClick={f}
    src={mockPath}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
