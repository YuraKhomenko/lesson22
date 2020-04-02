// let memory = prompt("ssdf");
// let price = 0;
// if (+memory === 64) {
//     price = 300;
// } else if (+memory === 128) {
//     price = 500;
// } else if (+memory === 256) {
//     price = 700;
// }

// let img = "black.png";

// document.write(`<img src="images/${img}">`);
// alert("Price is " + price + "$");
// console.log('<img src="images/' + img + '" alt="">');
// console.log(`<img src="images/${img}">`);

// let x = 10;
// let y = "10";

// console.log(x === y);

// let message;
// if (2 === 2) {
//     message = 'OK';
// } else {
//     message = 'NE OK';
// }
// console.log(message);

// console.log(2 === 2 ? "OK" : "NE OK");

// let x = 10;

// let y;
// if (x === 10) {
//     y = 5;
// } else {
//     y = 7;
// }

// let y = x === 10 ? 5 : 7;

// let age;
// let message = age >= 18 ? 'Совершеннолетний' : 'Несовершеннолетний';

// let day = "mon";

// if (day === "mon") {
//   alert("Понедельник");
// } else if (day === "tue") {
//   alert("Вторник");
// } else if (day === "wed") {
//   alert("Среда");
// } else if (day === "thu") {
//   alert("Четверг");
// } else if (day === "fri") {
//   alert("Пятница");
// } else {
//   alert("Такого дня нет");
// }

// switch (day) {
//   case "mon":
//     alert("Понедельник");
//     break;
//   case "tue":
//     alert("Вторник");
//     break;
//   case "wed":
//     alert("Среда");
//     break;
//   case "thu":
//     alert("Четверг");
//     break;
//   case "fri":
//     alert("Пятница");
//     break;

//   default:
//     alert("Такого дня нет");
//     break;
// }

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// let i;

// do {
//   i = prompt("??");
// } while (+i === 10);

// let i = 0;

// while(i < 10) {
//     console.log(i);
//     i++;
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 9; i >= 0; i--) {
//   console.log(i);
// }

// let str = "";
// for (let i = 0; i < 10; i++) {
//   str += i === 9 ? `${i}` : `${i}, `;
// }
// console.log(str);

// let attempt = 3;
// let winNumber = 9;
// let number;

// while (attempt > 0) {
//   number = prompt("Your number ?");
//   if (+number < 1 || +number > 10) {
//     alert("Число должно быть от 1 до 10");
//     continue;
//   }
//   if (+number !== winNumber) {
//     attempt--;
//     alert(attempt === 0 ? "Ты проиграл" : "Не угадал. Попробуй еще");
//     continue;
//   } else {
//     alert("УРААА! Ты выиграл!");
//     break;
//   }
// }

// let arr = ["Mon", "Tue", "Wed", "Thu", "Fri"];
// let arr = new Array("Mon", "Tue", "Wed", "Thu", "Fri");
// let arr = new Array(6);
// console.log(arr[20]);
// arr[4] = "FRIDAY !!!!";
// arr[200] = "NEW ELEMENT";
// console.log(arr.length);
// arr[arr.length] = "Sat";
// console.log(arr);
// console.log(arr[arr.length - 1]);


let attempt = 3;
 let winNumber = 9;
 let number;
while (attempt > 0) {
       number = prompt("Your number ?");
       if (+number < 1 || +number > 10) {
         alert("Число должно быть от 1 до 10");
         continue;
       }
       if (+number !== winNumber) {
         attempt--;
         alert(attempt === 0 ? "Ты проиграл" : "Не угадал. Попробуй еще");
         continue;
       } else {
         alert("УРААА! Ты выиграл!");
         break;
       }
     }
/*
 let arr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
 for (let i = 0; i < arr.length; i++) {
   if (arr[i] === "Tue" || arr[i] === "Thu") {
     continue;
   }
   console.log(arr[i]);
 }
*/
// let key = 'email';

// let user1 = {
//   username: "sasha777",
//   email: "sasha777@gmail.com"
// };

// console.log(user1.username);
// console.log(user1[key]);

// let user1 = ['sasha777', 'sasha777@gamil.com', 43, 43];
// console.log(user1[2]);

// let key = "age";
// let users = [
//   {
//     name: "John",
//     age: 30
//   },
//   {
//     name: "Ivan",
//     age: 20
//   },
//   {
//     name: "Kate",
//     age: 34
//   }
// ];

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i][key]);
// }

// 1) Создать двумерный массив (с нулями) спрашивая у пользователя его размерность
 /*let length = 5;
 let arr = [ 
     [0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0], 
     [0, 0, 0, 0, 0], 
     [0, 0, 0, 0, 0],  
     [0, 0, 0, 0, 0] 
    ];
 
    
    let arr = [ 
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0],  
        [0, 0, 0, 0, 0] 
       ];
     let number = prompt("Введите размер массива")
       for(let i = 0; i <number.length; i++ )
       console.log(arr[i]);
*/
   


    
   
   


/*
   let table = new Array(10);
  
 for (let i = 0; i < table.length; i++) { // В таблице 10 строк
     table[i] = new Array(10);            // В каждой строке 10 столбцов
 }

//  Инициализация массива.
 for (let row = 0; row < table.length; row++) {
     for (let col = 0; col < table[row].length; col++) {
         if ((row + col) % 2 == 1)
            table[row][col] = "1";
         else
             table[row][col] = "0";
         document.write(table[row][col]); //вывод заполненой ячейки сразу
     }
    document.write("<br>");    //разрыв строки

}*/
// 2) Если пользователь ввел неправильный объем памяти - переспрашивать.
// Если пользователь нажал отмена - выходить.
// Если пользователь ввел корректный объем памяти спрашивать у него цвет телефона
// Если все введено вверно и пользователь нигде не нажал отмена - выводить (document.write) цену и картинку телефона

// Спросили память
// если память корректная
// спросили цвет
// есл цвет и память правильные то выводить картинку и цену на экран
// while() {

// }
// while(заходить в этот цикл только тогда, когда ввел память) {

// }

// 3) Цена телеофна зависит не только от памяти, но и от цвета
// 64gb silver - 300
// 64gb black - 300 + наценка за цвет(3$)
// Используйте массивы для хранения ВСЕХ ПАМЯТЕЙ и ЦВЕТОВ
// let memories = [64,128,256]

// посмотреть методы массивов
