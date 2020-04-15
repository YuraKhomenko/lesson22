// const TodosModel = (function () {
//   const todos = [
//     {
//       id: 1,
//       text: "Make smth",
//       done: false,
//     },
//   ];
//   return {
//     getTodos: function (cb) {
//       // http call...
//       cb(todos);
//     },
//     addTodo: function (newTodoText, cb) {
//       const newTodo = {
//         id: !todos.length ? 1 : todos[todos.length - 1].id + 1,
//         text: newTodoText,
//         done: false,
//       };
//       todos.push(newTodo);
//       cb(newTodo);
//     },
//   };
// })();

// const TodosView = (function () {
//   const componentRef = document.querySelector("#todos");
//   const addBtnElement = componentRef.querySelector(".todos__btn");
//   const inputElement = componentRef.querySelector(".todos__input");
//   const listElement = componentRef.querySelector(".todos-list");

//   const getTodoTemplate = function (todo) {
//     return `<div class="todos-list__item">${todo.text}</div>`;
//   };

//   return {
//     listenAddingTodo: function (cb) {
//       addBtnElement.addEventListener("click", () => {
//         if (!inputElement.value) {
//           return;
//         }
//         const todoText = inputElement.value;
//         cb(todoText);
//       });
//     },
//     renderTodos: function (todos) {
//       let template = "";
//       todos.forEach((todo) => {
//         template += getTodoTemplate(todo);
//       });
//       listElement.innerHTML = template;
//     },
//     renderNewTodo: function (todo) {
//       listElement.insertAdjacentHTML("beforeend", getTodoTemplate(todo));
//     },
//   };
// })();

// const TodosController = (function () {
//   return {
//     init: function () {
//       TodosModel.getTodos((todos) => {
//         TodosView.renderTodos(todos);
//       });
//       this.listen();
//     },
//     listen: function () {
//       TodosView.listenAddingTodo((todoText) => {
//         TodosModel.addTodo(todoText, (todo) => {
//           TodosView.renderNewTodo(todo);
//         });
//       });
//     },
//   };
// })();

// TodosController.init();

// const user = function (name) {
//   return {
//     id: 1,
//     name,
//   };
// };

// console.log(user("Kate"));

// class User {
//   constructor(name, surname, age) {
//     this.name = name;
//     this.age = age;
//     this.surname = surname;
//   }

//   getDisplayName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// const userIvan = new User("Ivan", "Ivanov", 30);
// console.log(userIvan.getDisplayName());
// console.log(userIvan instanceof User);

// class TodosModel {
//   constructor() {
//     this._todos = ['sdfsd'];
//   }

//   getTodos() {

//   }
// }

// const todosModel = new TodosModel();

// todosModel._todos;

// const animal = {
//   eat: true,
// };

// const tiger = {
//   eat: false,
//   isStriped: true,
// };

// tiger.__proto__ = animal;

// console.log(tiger.eat);

// const User = function (name, surname, age) {
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
//   // this.getDisplayName = function () {
//   //   return `${this.name} ${this.surname}`;
//   // };
// };

// User.prototype.getDisplayName = function () {
//   return `${this.name} ${this.surname}`;
// };

// const userIvan = new User("Ivan", "Ivanov", 30);

// console.log(userIvan);
// console.log(userIvan.getDisplayName());

// class User {
//   constructor(name, surname, age) {
//     this.name = name;
//     this.age = age;
//     this.surname = surname;
//   }

//   getDisplayName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// const userIvan = new User("Ivan", "Ivanov", 30);
// console.log(userIvan.getDisplayName());
// console.log(userIvan instanceof User);

// 1) Переписать Todos app на классы. Model, View, Controller сделать классами.
// 2) extend у классов.
// 3) Backbone документация
// 4) jQuery теория
// 5) Observer паттерн теория. Сравнить с MVC.
