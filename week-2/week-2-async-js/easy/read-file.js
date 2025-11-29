
const  fs  = require('fs');

fs.readFile("a.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return
    }
    console.log(data)
})

fs.writeFile("out.txt", "hello world\n", "utf-8", (err) => {
    if (err) {
        return
    } 
    console.log("written")
})