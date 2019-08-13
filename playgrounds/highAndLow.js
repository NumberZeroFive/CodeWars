function highAndLow(numbers) {
  const splitNumber = numbers
    .split(' ')
    .sort((a, b) => a - b)
    .map(num => num);
  return [splitNumber[splitNumber.length - 1], splitNumber[0]].join(' ');
}

module.exports = highAndLow;
