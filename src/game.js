
const fieldMapping = [
  { number: 1, color: 'red' },
  { number: 2, color: 'black' },
  { number: 3, color: 'red' },
  { number: 4, color: 'black' },
  { number: 5, color: 'red' },
  { number: 6, color: 'black' },
  { number: 7, color: 'red' },
  { number: 8, color: 'black' },
  { number: 9, color: 'red' },
  { number: 10, color: 'black' },
  { number: 11, color: 'black' },
  { number: 12, color: 'red' },
  { number: 13, color: 'black' },
  { number: 14, color: 'red' },
  { number: 15, color: 'black' },
  { number: 16, color: 'red' },
  { number: 17, color: 'black' },
  { number: 18, color: 'red' },
  { number: 19, color: 'red' },
  { number: 20, color: 'black' },
  { number: 21, color: 'red' },
  { number: 22, color: 'black' },
  { number: 23, color: 'red' },
  { number: 24, color: 'black' },
  { number: 25, color: 'red' },
  { number: 26, color: 'black' },
  { number: 27, color: 'red' },
  { number: 28, color: 'black' },
  { number: 29, color: 'black' },
  { number: 30, color: 'red' },
  { number: 31, color: 'black' },
  { number: 32, color: 'red' },
  { number: 33, color: 'black' },
  { number: 34, color: 'red' },
  { number: 35, color: 'black' },
  { number: 36, color: 'red' },
] 

function getWinningAmount (result, betType) {
  if (typeof betType == 'number' || result == 0) {
    if (betType == result) {
      return 35;
    }
  } else {
    const [type1, type2] = betType.split('-');
    // even, odd
    if (type1 == 'odd' || type1 == 'even') {
      if (type1 == 'odd' && result % 2 != 0) {
        return 1;
      } else if (type1 == 'even' && result % 2 == 0) {
        return 1;
      }
      return 0;
    }
    // black, red
    if (type1 == 'black' || type1 == 'red') {
      const color = fieldMapping.find(x => x.number == result).color;
      if (color == type1) {
        return 1;
      }
      return 0;
    }
    // 1-18, 19-36
    if (type1 == '1' || type1 == '19') {
      if (type2 == '18' && result <= 18) {
        return 1;
      } else if (type2 == '36' && result >= 19) {
        return 1;
      }
      return 0;
    }
    // row
    if (type1 == 'row') {
      if (type2 == '1' && result <= 12) {
        return 2;
      } else if (type2 == '2' && result >= 13 && result <= 24) {
        return 2;
      } else if (type2 == '3' && result >= 25 && result <= 36) {
        return 2;
      }
      return 0;
    }
    // col
    if (type1 == 'col') {
      if (type2 == '1' && result + 2 % 3 == 0) {
        return 2;
      } else if (type2 == '2' && result + 1 % 3 == 0) {
        return 2;
      } else if (type2 == '3' && result % 3 == 0) {
        return 2;
      }
      return 0;
    }
    return 0;
  }
}

export default {
  fieldMapping,
  getWinningAmount
}