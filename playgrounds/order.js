function order(words) {
  const splitWord = words
    .split(' ')
    .sort((a, b) => {
      const sortA = Number(a.split('').sort()[0]);
      const sortB = Number(b.split('').sort()[0]);
      if (sortA > sortB) {
        return 1;
      } else if (sortA < sortB) {
        return -1;
      } else {
        return 0;
      }
    })
    .join(' ');
  return splitWord;
}
// console.log('order :', order('is2 Thi1s T4est 3a'));

// function neworder(words) {
//   const sortWord = words
//     .split(' ')
//     .sort((a, b) => {
//       return a.match(/\d/) - b.match(/\d/);
//     })
//     .join(' ');
//   return sortWord;
// }

// Thi1s is2 3a T4est
// console.log('order :', neworder('is2 Thi1s T4est 3a'));

module.exports = order;
