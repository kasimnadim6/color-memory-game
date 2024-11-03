import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Box = ({
  bgColor,
  activeColors = [],
  revealedColors = new Set(),
  onBoxSelection,
}) => {
  const DEFAULT_COLOR = 'white';
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_COLOR);
  const isRevealed = revealedColors.has(backgroundColor);

  const onClickHandler = () => {
    if (backgroundColor !== DEFAULT_COLOR) return;
    setBackgroundColor(bgColor);
    onBoxSelection(bgColor);
  };

  useEffect(() => {
    if (!isRevealed && activeColors.length === 0) {
      setBackgroundColor(DEFAULT_COLOR);
    }
  }, [activeColors, isRevealed]);

  return (
    <div
      className="box"
      style={{ backgroundColor }}
      onClick={onClickHandler}
    ></div>
  );
};

export default Box;
Box.propTypes = {
  bgColor: PropTypes.string.isRequired,
  activeColors: PropTypes.array.isRequired,
  revealedColors: PropTypes.object.isRequired,
  onBoxSelection: PropTypes.func.isRequired,
};
