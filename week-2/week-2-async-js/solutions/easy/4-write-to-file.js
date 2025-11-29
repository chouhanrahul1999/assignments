// const fs = require('fs').promises;

// async function writeToFile(filename, content) {
//   try {
//     await fs.writeFile(filename, content, 'utf8');
//     console.log('File has been written successfully');
//   } catch (error) {
//     console.error('Error writing to file:', error);
//   }
// }

// // Usage
// writeToFile('example.txt', 'Hello, world!');


const fs = require('fs').promises;

async function writefunction(fileName, content) {
  try {
      await fs.writeFile(fileName, content, 'utf-8')
      console.log('file has been writen')
  } catch (error) {
console.log("error has occure", error)
  }
}

writefunction('example1.txt', 'hi puja baby you know i love you so much')



