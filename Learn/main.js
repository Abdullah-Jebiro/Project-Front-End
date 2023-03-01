// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArray = numbers.map((x) => x * 10);
// console.log(numbers);
// console.log(newArray);
// console.log(numbers.filter((x) => x > 3));
// console.log(numbers);
// numbers.forEach((x) => {
//   console.log(x);
// });
// newArray = numbers.concat(newArray);
// console.log(newArray);
// console.log(newArray.every((x) => x > 10));
// console.log(newArray.some((x) => x > 10));
// console.log(newArray.includes(10));
// console.log(newArray.join("-"));
// console.log(newArray.join(""));
// console.log(
//   newArray
//     .join("")
//     .split("")
//     .filter((x) => x != 0)
//     .join("")
// );
// console.log(newArray.join("").split("1"));
// console.log(newArray);
// console.log(newArray.find((x) => x > 10));
// console.log(newArray.findIndex((x) => x > 2));
// console.log(newArray.indexOf(20));
// console.log(newArray.reverse());
// console.log(newArray);

// let arrEmpty = new Array(3);
// arrEmpty.fill("item");
// console.log(arrEmpty);

// arrEmpty.push("new-Item");
// console.log(arrEmpty);
// arrEmpty.pop();
// arrEmpty.shift();
// arrEmpty.unshift("zero");
// console.log(arrEmpty);
// console.log(numbers);
// let a_x = numbers.slice(2, -3);
// console.log(a_x);
// let a_y = numbers.slice(2);
// console.log(a_y);
// let a_z = numbers.slice(2, 3);
// console.log(a_z);
// let a_a = numbers.slice(2, 4);
// console.log(a_a);

// document.getElementById("email").value = "abdullahjbero@gmail.com";
// document.getElementById("email").innerText = "Alijbero@gmail.com";
// document.getElementById("email").style.backgroundColor = "red";

// function over() {
//   document.getElementsByTagName("img")[1].src = "./2.jpg";
// }

// function out() {
//   document.getElementsByTagName("img")[1].src = "./1.png";
// }

// setInterval(() => {
//   document.getElementById("date").innerText = Date();
// }, 1);

// function Interval() {
//   document.getElementById("date2").innerText = Date();
//   setTimeout(() => Interval(), 1);
// }
// Interval();





function getUser_callback(callback) {
  setTimeout(() => {
    callback([
      { id: 1, name: "ali" },
      { id: 2, name: "omar" },
    ]);
  }, 3000);
}

function findUser(userName, callback) {
  getUser_callback((users) => {
    const user = users.find((user) => user.name === userName);
    callback(user);
  });
}

findUser('ali',console.log);

// function getUsers() {
//     return new Promise((resolve, reject) => {
//         resolve([ { id: 1, name: "ali" }, { id: 2, name: "omar" }]);
//     })
// }



function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false)
        resolve([
          { id: 1, name: "ali" },
          { id: 2, name: "omar" },
        ]);
      else reject("error");
    }, 3000);
  });
}

function onSuccess(users) {
  console.log(users);
}

getUsers()
  .then(onSuccess)
  .catch((x) => console.error(x))
  .finally(() => console.log("finally"));
