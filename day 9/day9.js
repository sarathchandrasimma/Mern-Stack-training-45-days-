// const arr=[10,5,8,15,20];
// for(const i in arr){
//     console.log(arr[i])
// }
// const op=arr.map(
// (i)=>i+1
// )
// console.log(arr)
// console.log(op)
// arr.forEach((value,index)=>{
//     arr[index]=value*10;
// })
// console.log(arr)
// let even=arr.filter(i => i%3===0)
// console.log(even)


// let a = [10, 15, 20];
// // Modifies original array
// a.forEach((value, index, arr) => {
//   arr[index] = value + 2;
// });

// console.log(a);
 

// let arr =[10,5,8,15,20]
// // Creates a new Array
// let op = arr.map(
//     (i)=> i+2
// )

// console.log(op)  //modified array
// console.log(arr) //original array



// let arr = [3,40,5,10,30]

// //Filter Creates New Array
// // let filter = arr.filter((i)=>{
// //     console.log(i>20)
// // })
// let even = arr.filter( i => i%2 ===0)
// console.log(even)
// console.log(arr)


// let arr =[0,3,5,8,10]

// // find Creates a new array
// let found = arr.find((x)=> x>8)
// console.log(found)
// console.log(arr)

// let obj={
//     name:"sarath",
//     age:20,
//     city:"sklm",
//     address:[
//         {add1:"sklm"},
//         {add1:"viz"}
//     ],
//     hobbies:{
//         sports:"cricket",
//         games:{
//             indoor:"caroms",
//             outdoor:"badmintion"
//         }
//     }
// }
// console.log(obj)
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.city)
// console.log(obj.address)
// console.log(obj.address)
// console.log(obj.address[0])
// console.log(obj.address[1])
// console.log(obj.hobbies.games.indoor)


//curd operations on the objects
// let obj1={
//     name:"tarun",
//     age:500
// }
// console.log(obj1)
// obj1.city="tekkali"
// obj1.age=3000
// console.log(obj1)
// delete obj1.age;
// console.log(obj1)

//oject-destructuring:=(Spread Operator)
// Object-Destructuring:- (Spread Operator)
// Structured
// let obj2={
//     name:"Bhandari",
//     age:20,
//     city:"vizag"
// }
// // Unstructured
// let {name,age} = obj2;
// console.log(name)
// console.log(age)

// let obj3={
//     name:"Rohit",
//     age:30,
//     clg:"AITAM"
// }

// let obj4={
//     name:"Rohit",
//     age:30,
//     clgs:"AITAM"
// }


// const merge ={...obj3,...obj2,...obj4}
// console.log(merge)

