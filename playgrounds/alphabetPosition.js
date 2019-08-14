function alphabetPosition(text) {
  let result = [];
  for (let index = 0; index < text.length; index++) {
    let code = text.toUpperCase().charCodeAt(index);
    const position = code - 64;
    if (position > 0 && position < 27) {
      result.push(position);
    }
  }
  return result.join(' ');
}

module.exports = alphabetPosition;
