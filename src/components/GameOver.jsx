import PropTypes from 'prop-types';

const GameOver = ({ roundCount, onReset }) => {
  return (
    <div>
      <h2>GameOver</h2>
      <span>Total selection try made was - {roundCount}</span>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default GameOver;

GameOver.propTypes = {
  roundCount: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired,
};
