// let x: number = 1;

// console.log(x)

// function greet(firstname: string) {
//     console.log(`hello ${firstname}`)
// }

// greet("string");

// const sum = (a: number, b: number) => {
//     return a + b
// }

// let ans = sum(2, 4);
// console.log(ans)

// const delayedCall = (fn: (a: string) => void) => {
//     setTimeout(fn, 2000);
// }

// function greet(name: string) {
//     console.log("hello" + name)
// }

// delayedCall(greet)

// greet("rahul")

// function greet(user: {
//     name: string,
//     age: number
// }) {
//     console.log("hello" + user.name + user.age)
// }

// greet({
//     name: "rahul",
//     age: 23
// })

// function isEven(num: number): boolean {
//     if (num % 2 == 0) {
//         return true
//     } else {
//         return false
//     }
// }

// const final = isEven(4)

// console.log(final)

// interface Address {
//     city: string;
//     country: string
//     pincode?: number
// }

// interface User {
//     name: string;
//     age: number;
//     address?: Address
// }

// interface Office {
//     address: Address;
// }

// let user: User = {
//     name: "rahul",
//     age: 21,
//     address: {
//         city: "delhi",
//         country: "india"
//     }
// }

// function isLegle(user: User): boolean {
//     if (user.age >= 18) {
//         return true
//     } else {
//         return false
//     }
// }

// const ans =isLegle(user)

// console.log(ans)

// interface People {
//     name: string,
//     age: number,
//     // greet: () => string,
//     isLegle: () => boolean
// }
//objext using interfaces
// const persion: People =  {
//     name: "rahul",
//     age: 21,
//     greet: () => {
//         return "hi"
//     }
// }
//implementation of interfaces as class

// class Manager implements People {
//     name: string;
//     age: number;

//    constructor(name: string, age: number) {
//     this.name = name
//     this .age = age
//    }
//    isLegle(): boolean {
//        return this.age > 18
//    }
// }

// let user = new Manager("jhon", 30)
// console.log(user.age)
// console.log(user.isLegle())

// let greeting = persion.greet()
// console.log(greeting)

//   abstract classess

// abstract class User {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }

//     abstract greet(): string
//     hello() {
//     console.log('hello workd')
//     }
// }

// class Employee extends User {
//     name: string;
//     constructor(name: string) {
//         super(name)
//         this.name = name
//     }
//     greet() {
//         return "hi" + this.name
//     }
// }

// in types we cannot implement classes : diff btw interface and types;
//diff btw abstract class and interfaces is abstract class have default implementation

// *{types} we cna do union and intersection.

// intersection it need all the value

// type Employee = {
//     name: string;
//     startDate: string;
// }

// type Manager = {
//     name: string;
//     department: string;
// }

// type TeamLead = Employee & Manager;

// let e: Employee = {
//     name: "rahul",
//     startDate: "01-01-1333"
// }

// let m: Manager ={
//     name: "raman",
//     department: "electricity"
// }

// let t: TeamLead = {
//     name: "harkiat",
//     startDate: "djfjf",
//     department: "electricity"
// }

// union can have either or all the value

// type Employee = {
//     name: string;
//     startDate: string;
// }

// type Manager = {
//     name: string;
//     department: string;
// }

// type TeamLead = Employee | Manager;

// let e: Employee = {
//     name: "rahul",
//     startDate: "01-01-1333"
// }

// let m: Manager ={
//     name: "raman",
//     department: "electricity"
// }

// let t: TeamLead = {
//     name: "harkiat",
//     startDate: "djfjf",

// }

// Array in typescript

// function getMax(nums: number[]) {
//     let maxVal = -10000000;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > maxVal) {
//             maxVal = nums[i]
//         }
//     }
//     return maxVal
// }

// const ans = getMax([1, 2, 3])
// console.log(ans)

// interface User {
//     firstName: string;
//     lastName : string;
//     age: number;
// }

// const users: User[] = [{
//     firstName: "raman",
//     lastName: "sinha",
//     age: 21,
// }, {
//     firstName: "rahul",
//     lastName: "singh",
//     age: 17
// }
// ]

// function filterUser(users: User[]) {
//   return users.filter((user) => user.age > 18);
// }

// const finalUser = filterUser(users);
// console.log(finalUser)

// interface User {
//     name: string;
//     age: number;
// }

// function sumAge(user1: User, user2: User) {
//   return user1.age + user2.age
// }

// const totalage = sumAge({age: 21, name: "raman"}, {name: "harkit", age: 23})
// console.log(totalage)

// interface User {
//     id: string;
//     name: string;
//     age: number;
//     email: string;
//     password: string;
// }

// type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

// function updateUser (updateUser: UpdateProps) {

// }

//readoly: you cnat change the value of user object

// type User = {
//     readonly name: string;
//     readonly age: number;
// }

// const user: User = {
//     name: 'jhon',
//     age: 21
// }

// good use case is config

// { * records and maps}

// type Users = Record<string, {id: string, usernsme: string}>

// const users = {
//   "res@df": {
//     id: "ras@df",
//     userName: "harkirat",
//   },
//   "resfdf": {
//     id: "resfdf",
//     username: "rahul",
//   },

// };

// type User = {
//     id: string;
//     userName: string
// }

// const users = new Map<string, User>();

// users.set("res@df", {
//   id: "ras@df",
//   userName: "harkirat",
// });
// users.set("res@df3", {
//   id: "ras@df",
//   userName: "harkirat",
// });
// const user = users.get("res@df")
// console.log(user)


// {* exckude} 

// type EventType = 'click' | 'scroll' | 'mousemove';
// type ExcludeEvent = Exclude<EventType, 'scroll'>;

// const handleEvent = (event: ExcludeEvent) => {
//     console.log(`Handling event: ${event}`);
// }

// handleEvent('click')


import { z } from 'zod';
import express from "express";

const app = express();

const userProfileSchema = z.object({
    name: z.string(),
    email: z.string().email().optional(),
})

export type FinalUserSchema = z.infer<typeof userProfileSchema>