function duplicateCount(text) {
  const splitText = text.split('');
  const duplicateCount = splitText.filter((word, index) => splitText.indexOf(word) !== index);
  return duplicateCount.length;
}

module.exports = duplicateCount;
