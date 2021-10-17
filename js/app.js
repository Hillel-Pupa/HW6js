function makeSum() {
  let currentCount = 0;

  return function sum(x) {
    currentCount += x;
    return currentCount;
  };
}
let sum = makeSum();
console.log(sum(2));
console.log(sum(4));
console.log(sum(5));
console.log(sum(1));
console.log(sum(6));

const myArr = [
  1,
  2,
  NaN,
  function () {},
  { firstName: "boba" },
  "string",
  "123",
  [1, 2, 3],
  23,
  0,
  54,
  false,
  true,
  Infinity,
  undefined,
  null,
];
function avg(array) {
  let sum = 0;
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (isFinite(element) && typeof element === "number") {
      console.log(element);
      sum += element;
      count++;
    }
  }
  return sum / count;
}
document.write(avg(myArr));

function doMath(x, znak, y) {
  switch (znak) {
    case "+":
      let sum = x + y;
      return sum;
      break;
    case "-":
      let min = x - y;
      return min;
      break;
    case "*":
      let mult = x * y;
      return mult;
      break;
    case "/":
      let divid = x / y;
      return divid;
      break;
    case "%":
      let perc = x % y;
      return perc;
      break;
    case "^":
      let deg = x ^ y;
      return deg;
      break;
    default:
      return "fail";
  }
}
function main() {
  const x = parseInt(prompt("Enter first number"));
  if (isNaN(x)) {
    alert("its not a number");
    return;
  }
  const znak = prompt(` ${x}\nEnter sign`);
  if (!"+-*/%^".includes(znak)) {
    alert("its not legal sign");
    return;
  }
  const y = parseInt(prompt(`${x} ${znak}\nEnter second number`));
  if (isNaN(y)) {
    alert("its not a number");
    return;
  }
  let result = doMath(x, znak, y);
  alert(`${x} ${znak} ${y} = ${result}`);
}
main();

// function fillArr() {
//   let outerArr = [];
//   let arrLength = parseInt(prompt("enter your first arr length like: 1 or 4 "));
//   for (let i = 0; i < arrLength; i++) {
//     let subArrLength = parseInt(
//       prompt(`enter your ${i + 1} sub arr length like: 1 or 4`)
//     );
//     let subArr = [];
//     for (let subIndex = 0; subIndex < subArrLength; subIndex++) {
//       const element = prompt(`enter element for ${subIndex + 1} sub arr`);
//       subArr.push(element);
//     }
//     outerArr.push(subArr);
//   }
//   return outerArr;
// }
// console.log(fillArr());

// let inputSymbolsStr = prompt("enter your string");
// let symbolsToDeleteStr = prompt("enter symbols to delete");
// function deleteSymbols(inputString, symbolsString) {
//   let inputStringSymbols = inputString.split("");
//   let symbolsToDelete = symbolsString.split("");
//   let resultString = "";
//   for (let index = 0; index < inputStringSymbols.length; index++) {
//     let element = inputStringSymbols[index];
//     if (symbolsToDelete.indexOf(element) === -1) {
//       resultString += element;
//     }
//   }
//   return resultString;
// }

// document.write(deleteSymbols(inputSymbolsStr, symbolsToDeleteStr));
