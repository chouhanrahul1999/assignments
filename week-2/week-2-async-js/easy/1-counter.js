// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 9

// let counter = 0;
// setInterval (() => {
//     console.log(counter);
//     counter ++;
// }, 1000)
// const date = new Date();
// console.log(date.getMonth())

// const map = new Map();
// map.set('name', 'harkirat');
// map.set('age', 30)
// map.set('gf', 'puja')

// const firstName = map.get('gf')
// console.log(firstName)


// let counter = 0;

// const updateCounter = () => {
//     counter++
//     console.log(counter)
// }

// setInterval(updateCounter, 1000)

let count = 0;
const updateCounter = () => {
    count ++
    console.log(count)
}

setInterval(updateCounter, 1000);