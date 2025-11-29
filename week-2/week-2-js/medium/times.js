/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

// function calculateTime(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i
//     }
//     return sum;
// }
// const result = calculateTime(10000000)
// console.log(result);

function calculateTime(n) {
    // const start = Date.now(); // Record start time
    // let sum = 0;
    // for (let i = 1; i <= n; i++) {
    //     sum += i;
    // }
    // const end = Date.now(); // Record end time
    // const timeTaken = (end - start) / 1000; // Time in seconds
    // console.log(`Time taken to sum from 1 to ${n}: ${timeTaken} seconds`);
    // return sum;

    const start = Date.now();
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        sum = sum + i;
    }
    const end = Date.now();
    const timeTaken = (end - start) / 1000;
    console.log(`Time taken to sum 1 to ${n} : ${timeTaken} seconds`);
    return sum;
}
const number = calculateTime(100);
calculateTime(100000);
calculateTime(1000000000);
console.log(number)