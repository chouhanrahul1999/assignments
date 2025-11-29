// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
// const fs = require('fs')

// function ondone() {
//     console.log("extra space is ckeaned")
// }

// fs.cleanFile("a.txt", "utf-8", ondone)
//

// const fs = require("fs");

// // function readTheFile(sendFinalValueHear) {
// //     fs.readFile("a.txt", "utf-8", function(err, data) {
// //         sendFinalValueHear(data);
// //     })
// // }

// // function readFile(fileName) {
// //     return new Promise(readTheFile);
// // }

// // const p = readFile();

// // function callback(contants) {
// //     console.log(contants)
// // }

// // p.then(callback)

// class Promise2 {
//     constructor(fn) {
//         function afterDone() {
//             this.resolve()
//         }
//         fn(afterDone)
//     }
//         then(callback) {
//             this.resolve = callback
//         }
// }

// function readTheFile(sendFinalVal) {
//     fs.readFile("a.txt", "utf-8", function(err, data) {
//         sendFinalVal(data)
//     })
// }

// function readFile(fileName) {
//     return new Promise2(readTheFile)
// }
// const p = readFile();

// function callback(contents) {
// console.log(contents)
// }

// p.then(callback)

const fs = require("fs");

// const cleanFile = (filePath) => {
//   fs.readFile(filePath, "utf-8", (error, data) => {
//     if (error) {
//       console.error("this id error:", error);
//       return;
//     }
//     const fileCleaner = data.replace(/\s+/g, " ").trim();

//     fs.writeFile(filePath, fileCleaner, "utf-8", (error) => {
//       if (error) {
//         console.error("error in writing", error);
//         return;
//       }
//       console.log("file is sucessfully written");
//     });
//   });
// };

// const filePath = "example.txt";
// cleanFile(filePath);

const cleanFile = (filePath) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    const clearFile = data.replace(/\s+/g, " ").trim();

    fs.writeFile(filePath, clearFile, "utf-8", (err) => {
      if (err) {
        console.error("Error writing to the file:", err);
        return;
      }
      console.log("file is clear successfully");
    });
  });
};

const filePath = 'example.txt';
cleanFile(filePath)
