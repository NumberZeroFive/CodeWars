function squareDigits(num) {
  const splitDigits = String(num).split('');
  const result = splitDigits.map(number => number * number).join('');
  return Number(result);
}

// 811181
// console.log('squareDigits :', squareDigits(9119));
module.exports = squareDigits;
