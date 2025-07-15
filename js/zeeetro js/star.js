// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// let n = 5;
// for (let i = n; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

let n = 5;
for (let i = 1; i <= n; i++) {
  let row = " ".repeat(n - i);
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
