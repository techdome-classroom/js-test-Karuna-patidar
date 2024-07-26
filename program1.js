const getTotalIsles = function (grid) {
  const row = grid.length;
  const col = grid[0].length;
  let isl = 0;
  const flag = (i, j) => {
      if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] !== 'L') {
          return;
      }
      grid[i][j] = '#'; 
      flag(i + 1, j);
      flag(i - 1, j);
      flag(i, j + 1);
      flag(i, j - 1);
  };
  for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
          if (grid[i][j] === 'L') {
              flag(i, j);
              isl++;
          }
      }
  }
  return isl;
  };
  module.exports = getTotalIsles;
