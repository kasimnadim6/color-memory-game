function _getRandomColor() {
  const randomColor = () => Math.floor(Math.random() * 256);

  const r = randomColor().toString(16).padStart(2, '0');
  const g = randomColor().toString(16).padStart(2, '0');
  const b = randomColor().toString(16).padStart(2, '0');

  return `#${r}${g}${b}`;
}

export function getRandomColors(limit) {
  const colors = [];
  const seen = new Set();

  for (let idx = 0; idx < limit; idx++) {
    let color = _getRandomColor();

    while (seen.has(color)) {
      color = _getRandomColor();
    }
    colors.push(color);
  }
  return colors;
}

export function getShuffledArr(arr = []) {
  return arr.map((value, idx, array) => {
    const random = idx + Math.floor(Math.random() * (arr.length - idx));
    [array[random], array[idx]] = [array[idx], array[random]];
    return array[idx];
  });
}
