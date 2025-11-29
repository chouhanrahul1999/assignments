// function sum (a, b) {
//     return a + b
// }
// let ans = sum(2, 3)
// console.log(ans)

// function sum(n) {
//   let ans = 0;
//   for (let i = 0; i <= n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }
// const ans = sum(100);
// console.log(ans)

// function sum(n) {
//     return n * (n + 1)
// }

// const ans = sum(100);
//  console.log(ans)


// const fs = require("fs");

// try {
// 	const contents = fs.readFileSync("easy/a.txt", "utf-8");
// 	console.log("Contents of a.txt:\n" + contents);
// } catch (err) {
// 	console.error("Error reading a.txt:", err.message);
// }

// function sum (a, b) {
//     return a + b
// }

// function subtract (a, b) {
//     return a - b;
// }

// function multiply (a, b) {
//     return a * b;
// }

// function doOperation (a, b, op) {
//     return op(a, b)
// }

// console.log(doOperation(1, 2, subtract))

// const fs = require("fs");

// function print(err, data) {
//     console.log(data)
// }

// fs.readFile("easy/a.txt", "utf-8", print);


// function timeOut() {
//     console.log("hello")
// }

// setTimeout(timeOut, 5000);

// console.log("hi")

// function wait(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

// wait(2000).then(() => {
//     console.log("2 seconds passed")
// }) 

class Rectangle {
    constructor(width, height, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }

    area() {
     const area = this.width * this.height
     return area;
    }

    color() {
       const color = this.color;
       return color
    }
}

const rect = new Rectangle(2, 3, "red")
const are = rect.area();
const rect2 = new Rectangle(5, 9) 
const a = rect2.area();
console.log(are)
const col = rect.color
console.log(col)
console.log(a)