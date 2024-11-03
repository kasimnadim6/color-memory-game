import './App.css';
import Game from './components/Game';

function App() {
  const TOTAL_BOXES = 12;

  return (
    <>
      <p>
        <a href="https://www.devtools.tech/questions/s/how-to-build-color-memory-game-in-react-js-frontend-coding-challenge---qid---1wFNDiwjxcKwrHL65SN5?utm_source=social-share">
          Color Memory Game:{' '}
        </a>
      </p>
      <Game total={TOTAL_BOXES} />
    </>
  );
}

export default App;
