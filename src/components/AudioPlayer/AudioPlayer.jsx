import React, {Fragment} from "react";
import PropTypes from "prop-types";

const AudioPlayer = (props) => {
  const {isLoading, isPlaying, onPlayButtonClick, children} = props;
  return (
    <Fragment>
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        type="button"
        disabled={isLoading}
        onClick={() => onPlayButtonClick()}
      />
      <div className="track__status">
        {children}
      </div>
    </Fragment>
  );
};

AudioPlayer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default AudioPlayer;
