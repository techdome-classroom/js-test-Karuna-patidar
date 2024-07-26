const decodeTheRing = function (s, p) {

  let sIndex = 0;
  let pIndex = 0;

  while (sIndex < s.length && pIndex < p.length) {
    if (p[pIndex] === '*') {

      if (pIndex === p.length - 1) return true;
      let nextCh = p[pIndex + 1];
      let nextChIndex = s.indexOf(nextCh, sIndex);

      if (nextChIndex === -1) return false;

      sIndex = nextChIndex;
      pIndex++;
    } else if (p[pIndex] === '?' || p[pIndex] === s[sIndex]) {
      sIndex++;
      pIndex++;
    } else {
      return false;
    }
  }

  return sIndex === s.length && pIndex === p.length;

};

module.exports = decodeTheRing;