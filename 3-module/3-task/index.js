function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index > 0 ? word[0].toUpperCase() + word.slice(1) : word
    )
    .join("");
}

// function camelize(str) {
//   return str
//     .split("-")
//     .map(function (word, index) {
//       if (index > 0) {
//         return word[0].toUpperCase() + word.slice(1);
//       } else {
//         return word;
//       }
//     })
//     .join("");
// }
