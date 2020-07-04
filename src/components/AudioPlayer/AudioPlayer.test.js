import React from 'react';
import AudioPlayer from './AudioPlayer.jsx';
import renderer from 'react-test-renderer';
import mockFn from "../../mocks/fn.js";

const mockPath = `path`;

it(`AudioPlayer is rendered correctly`, () => {

  const tree = renderer.create(<AudioPlayer
    isPlaying={false}
    isLoading={true}
    onPlayButtonClick={mockFn}
    src={mockPath}
  >
    <audio />
  </AudioPlayer>, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
