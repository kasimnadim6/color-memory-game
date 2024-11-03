import { useMemo, useState } from 'react';
import { getRandomColors, getShuffledArr } from './utils';
import PropType from 'prop-types';
import Box from './Box';
import GameOver from './GameOver';

const Game = ({ total }) => {
  const [activeColors, setActiveColors] = useState([]);
  const [revealedColors, setRevealedColors] = useState(new Set());
  const [roundCount, setRoundCount] = useState(0);

  const boxes = useMemo(() => {
    const colors = getRandomColors(total / 2);
    const pairedColors = getShuffledArr([...colors, ...colors]);
    return pairedColors.map((color, id) => {
      return {
        id,
        bgColor: color,
      };
    });
  }, [total]);

  const selectionHandler = (currentSelectedColor) => {
    if (activeColors.length === 0) {
      setActiveColors([currentSelectedColor]);
      return;
    }
    if (activeColors[0] === currentSelectedColor) {
      setRevealedColors((prev) => new Set(prev.add(currentSelectedColor)));
      setActiveColors([]);
    } else {
      setTimeout(() => setActiveColors([]), 500);
    }
    setRoundCount((prev) => prev + 1);
  };

  const onReset = () => {
    setRevealedColors(new Set([]));
  };

  if (revealedColors.size === total / 2) {
    return <GameOver roundCount={roundCount} onReset={onReset} />;
  }
  return (
    <div className="container">
      {boxes.map((box) => (
        <Box
          key={box.id}
          {...box}
          activeColors={activeColors}
          revealedColors={revealedColors}
          onBoxSelection={selectionHandler}
        />
      ))}
    </div>
  );
};

export default Game;

Game.propTypes = {
  total: PropType.number.isRequired,
};
