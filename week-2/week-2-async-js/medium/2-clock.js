// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// const setTimeoutPromisefied = (ms) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };

// const callback = () => {
//   console.log("3 second have passed");
// };

// function callback1() {
//   const date = new Date();
//   console.log(date.getUTCMinutes());
// }

// setTimeoutPromisefied(3000).then(callback);
// setTimeoutPromisefied(5000).then(callback1);

// function timer() {
//   const date = new Date();
//   console.log(date.getMinutes());
//   setTimeout(timer, 1000)
// }
// timer();

// function callback() {
//     console.log("hello")

// }

// setTimeout(callback, 3000)

// function waitFor3Sec(resolve) {
//     setTimeout(resolve, 3000)
// }

// function main() {
//     console.log("wait for 3 sec")
// }

// waitFor3Sec(main)

// function waitfor3Sec(resolve) {
//     setTimeout(resolve, 3000)
// }

// function setTimeoutPromisefied() {
//     return new Promise(waitfor3Sec);
// }

// function main() {
//     console.log("main is called")
// }

// setTimeoutPromisefied().then(main)

// function randon(resolve) {
//     setTimeout(resolve, 3000)
// }

// let p = new Promise(randon);
// console.log(p);

// function callback() {
//   console.log("promise");
// }
// p.then(callback);

function pad(n) {
  // ensure numbers like 3 become '03'
  return String(n).padStart(2, "0");
}
function format24(date) {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
    date.getSeconds()
  )}`;
}

function format12(date) {
  const hours = date.getHours();
  const h12 = hours % 12 || 12;
  const ampm = hours >= 12 ? "PM" : "AM";
  return `${pad(h12)}:${pad(date.getMinutes())}:${pad(
    date.getSeconds()
  )} ${ampm}`;
}

function showClock() {
  const now = new Date();
  console.clear();
  console.log("24-hour:", format24(now));
  console.log("12-hour:", format12(now));
}

showClock();
setInterval(showClock, 1000);