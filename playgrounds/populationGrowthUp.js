function nbYear(people, percent, aug, p) {
  let year = 0;
  while (people <= p) {
    people = parseInt(people * (percent / 100)) + people + aug;
    year = year + 1;
  }
  return year;
}

// function nbYear(p0, percent, aug, p) {
//   if (p0 >= p) {
//     return 0;
//   } else {
//     p0 = p0 * (1 + percent / 100) + aug;
//     return 1 + nbYear(p0, percent, aug, p);
//   }
// }

// 94 year
// console.log(nbYear(1500000, 0.25, 1000, 2000000));
