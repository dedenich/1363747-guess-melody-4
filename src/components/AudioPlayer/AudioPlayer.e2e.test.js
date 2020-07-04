import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "../AudioPlayer/AudioPlayer.jsx";

configure({adapter: new Adapter()});

const mock = {
  isLoading: false,
  isPlaying: false,
  src: `path.mock`,
};

it(`Should understand a click`, () => {
  const {isPlaying, src, isLoading} = mock;
  const onPlayButtonClick = jest.fn();
  jest.spyOn(window.HTMLMediaElement.prototype, `pause`)
    .mockImplementation(() => {});
  const player = mount(
      <AudioPlayer
        renderPlayer={jest.fn()}
        isLoading={isLoading}
        isPlaying={isPlaying}
        src={src}
        onPlayButtonClick={onPlayButtonClick}
      >
        <audio />
      </AudioPlayer>);
  const button = player.find(`button`);
  expect(button.hasClass(`track__button--play`)).toBe(true);
  button.props().onClick();
  expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
});
