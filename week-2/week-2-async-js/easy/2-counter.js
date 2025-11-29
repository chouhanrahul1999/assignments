// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// const stopWatch = (counter = 0) => {
//     console.log(counter);
//     setTimeout(() => {
//         stopWatch(counter + 1);
//     }, 1000)
// }
// stopWatch()
let counter = 0;

const timer = () => {
  counter ++
  console.log(counter)
  setTimeout(timer, 1000)
}

timer()



// (Hint: setTimeout)
