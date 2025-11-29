"use strict";
// let x: number = 1;
const users = new Map();
users.set("res@df", {
    id: "ras@df",
    userName: "harkirat",
});
users.set("res@df3", {
    id: "ras@df",
    userName: "harkirat",
});
const user = users.get("res@df");
console.log(user);
