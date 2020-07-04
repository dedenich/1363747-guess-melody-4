import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withAudio from "./with-audio.js";
import mockFn from "../../mocks/fn.js";
import mockPlayer from "../../mocks/player.js";

configure({adapter: new Adapter()});

it(`Checks that HOC's callback turn on audio (play)`, () => {
  const PlayerWrapped = withAudio(mockPlayer);
  const wrapper = mount(<PlayerWrapped
    isPlaying={false}
    onPlayButtonClick={mockFn}
    src=""
  />);

  window.HTMLMediaElement.prototype.play = () => {};
  const {_audioRef} = wrapper.instance();
  jest.spyOn(_audioRef.current, `play`);
  wrapper.instance().componentDidMount();
  wrapper.find(`button`).simulate(`click`);

  expect(_audioRef.current.play).toHaveBeenCalledTimes(1);
});

it(`Checks that HOC's callback turn off audio (pause)`, () => {
  const PlayerWrapped = withAudio(mockPlayer);
  const wrapper = mount(<PlayerWrapped
    isPlaying={true}
    onPlayButtonClick={mockFn}
    src=""
  />);

  window.HTMLMediaElement.prototype.pause = () => {};
  const {_audioRef} = wrapper.instance();
  jest.spyOn(_audioRef.current, `pause`);
  wrapper.instance().componentDidMount();
  wrapper.find(`button`).simulate(`click`);

  expect(_audioRef.current.pause).toHaveBeenCalledTimes(1);
});
