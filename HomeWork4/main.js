// let getDataFromServer = function (cb) {
//   let data;
// //   data = ["Data 1", "Data 2"];
// // Когда данные с сервера получены
// cb(data);
// };

// getDataFromServer(function(result){console.log(result)});
// console.log('sdfsdf');
// console.log('sdfsdf');
// console.log('sdfsdf');
// // Выполянется cb функция из getDataFromServer
// console.log('sdfsdf');
// console.log('sdfsdf');
// console.log('sdfsdf');
// console.log('sdfsdf');
// console.log('sdfsdf');
// console.log('sdfsdf');

// Eventloop

// setTimeout(function () {
//   console.log(4);
// }, 200);
// console.log(2);
// setTimeout(function () {
//   console.log(1);
// }, 0);
// console.log(3);

// let i = 0;
// let interval = setInterval(function () {
//   i++;
//   console.log(i);
//   if (i === 5) {
//     clearInterval(interval);
//   }
// }, 1000);

// let x = {
//   a: 10,
//   b: 20,
//   f: function (c, d) {
//     // console.log(this);
//     console.log(this.a + this.b + c + d);
//   },
// };

// let button = {
//   a: 20,
//   b: 30,
// };

// // button.onclick = x.f.bind(x);
// button.onclick = x.f;

// button.onclick(10, 20);
// button.onclick.call(x, 10, 20);
// button.onclick.apply(x, [10, 20]);
// // button.onclick(20, 30);

// let y = function (a, b) {
//     return a + b;
// };

// let x = (a, b) => a + b;
// let x = (a, b) => {
//     return a + b
// };

// console.log(x(10, 10));

// let getData = function(cb) {

// }

// getData(() => {});

// let x = {
//   a: 10,
//   f1: function () {
//     // this = x
//     console.log(this.a);
//     let y = {
//       a: 20,
//       f2: () => {
//         // this = x
//         console.log(this.a);
//       },
//     };
//     y.f2();
//   },
// };
// x.f1();

// DOM
// Document Object Model

// let box = document.querySelector(".box");
// box.style.backgroundColor = "gold";
// console.dir(btn);

// let boxes = document.querySelectorAll(".box");
// for (let i = 0; i < boxes.length; i++) {
//   if (i === 0) {
//     boxes[i].style.backgroundColor = "blue";
//   }
//   if (i === 1) {
//     boxes[i].style.backgroundColor = "gold";
//   }
// }

// console.log(document);

// let box = document.querySelector(".box");
// box.onclick = function () {
//   alert("!!!!!");
// };
// box.onclick = function () {
//   alert("?????");
// };

//  box.addEventListener("click", function () {
//    alert("?????");
//  });
//  box.addEventListener("click", function () {
//    alert("!!!!!");
//  });

//  box.addEventListener("click", function (event) {
//    console.log(event);
//  });

//  let boxes = document.querySelectorAll(".box");
//  for (let i = 0; i < boxes.length; i++) {
//    const box = boxes[i];
//    box.addEventListener("click", (e) => {
//      e.target.style.backgroundColor = "gold";
//    });
//  }