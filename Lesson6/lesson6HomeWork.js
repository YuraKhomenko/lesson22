const TodosModel = (function () {
  const todos = [
    {
      id: 1,
      text: "Make smth",
      done: false,
    },
  ];
  return {
    getTodos: function (cb) {
      // http call...
      cb(todos);
    },
    addTodo: function (newTodoText, cb) {
      const newTodo = {
        id: !todos.length ? 1 : todos[todos.length - 1].id + 1,
        text: newTodoText,
        done: false,
      };
      todos.push(newTodo);
      cb(newTodo);
    },
  };
})();

const TodosView = (function () {
  const componentRef = document.querySelector("#todos");
  const addBtnElement = componentRef.querySelector(".todos__btn");
  const inputElement = componentRef.querySelector(".todos__input");
  const listElement = componentRef.querySelector(".todos-list");
//const removeTodo = componentRef. querySelector(".todos-list-Item")
  const getTodoTemplate = function (todo) {
    return `<div class="todos-list__item">${todo.text}</div>`;
  };
//   return {
//     listenRemoveTodo: function (cb) {
//         removeTodo.addEventListener("click", () => {
//   }
  return {
    listenAddingTodo: function (cb) {
      addBtnElement.addEventListener("click", () => {
        if (!inputElement.value) {
          return;
        }
        const todoText = inputElement.value;
        cb(todoText);
      });
    },
    renderTodos: function (todos) {
      let template = "";
      todos.forEach((todo) => {
        template += getTodoTemplate(todo);
      });
      listElement.innerHTML = template;
    },
    renderNewTodo: function (todo) {
      listElement.insertAdjacentHTML("beforeend", getTodoTemplate(todo));
    },
  };
})();

const TodosController = (function () {
  return {
    init: function () {
      TodosModel.getTodos((todos) => {
        TodosView.renderTodos(todos);
      });
    //   TodosModel.removeTodo((todosId) => {
    //     TodosView.renderTodos(newTodoList);
    //   });
      this.listen();
    },
    listen: function () {
      TodosView.listenAddingTodo((todoText) => {
        TodosModel.addTodo(todoText, (todo) => {
          TodosView.renderNewTodo(todo);
        });
      });
    //    TodosView.listenRemoveTodo((todoId) => {
    //     TodosModel.removeTodo(todoId, (newTodoList) => {
    //       TodosView.renderTodosList(newTodoList);
    //     });
    //   });
    },
  };
})();

TodosController.init();



// 1) Переписать Todos app на классы. Model, View, Controller сделать классами.
// 2) extend у классов.
// 3) Backbone документация
// 4) jQuery теория
// 5) Observer паттерн теория. Сравнить с MVC.
