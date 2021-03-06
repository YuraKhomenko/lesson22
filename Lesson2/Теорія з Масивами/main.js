// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// Массив - обьект, проиндексированый набор определенных элементов.
// В отличии от прочих языков программирования в JavaScript, не обязательно элементами
// массива должны быть однотипные значения.
// При создании массива используются [] скобки, внутри которых через заяпятую перечисляются элементы.
// Каждый элемент нумеруется индексом по возрастанию от 0.
// Массив, представляющий упорядоченную коллекцию пронумерованных значений - Фленаган Д.

// let a = [1, 2, 3, 4, 6];
//
// document.write(a); // Вывод элементов массива, при этом массив преобразуется в строку "1, 2, 3, 4, 6"
//
// // Пустой массив размерностью в 3 элемента.Последняя запятая завершающая.
// let c = [ , , ,];
//
// document.write(c);
// document.write(c.length);
//
// // Одномерный массив из трех элементов разных типов.
// let d = ["Hello", 34, true];
//
// document.write(d);
//
// let a = Array();                       // Пустой массив.
// let b = Array(1, 2, 3, 4, 5, 6);       // Массив размерностью в 6 элементов.(или один нечисловой элемент)
//
// document.write(b);
//
// let c = Array(10);                     // Массив размерностью в 10 элементов.
//
// document.write(c.length);

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// Обращаться к элементам массива можно по индексу.
// Для этого используеться форма: имя_массива[индекс массива].
// При таком обращении возможна как запись так и чтение элемента.
// Все индексы являются именами свойств, но только свойства с именами, представленными целыми числами.

// let arr = Array(5);   // Создаем массив размерностью в 5 элеемнтов.
//
// arr[0] = 2;
// arr[1] = 5;
// arr[2] = 12;
// arr[3] = 8;
// arr[4] = 23;
//
// document.write("Содержимое массива " + arr);
//
// arr[4] = "Четыре";         // Изменяем значение элемента массива по индексу 4.
// arr[10] = "Десять";        // Происходит изменение размера массива.
//
// document.write(arr);

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// Массив - обьект,  у которого имеется свойство length,
// это свойство хранит в себе длину массива и это свойство отличает массивы от обычных объектов JavaScript.

// Длина массива = 5 элементов.
// let array = ['h', 'e', 'l', 'l', 'o'];
//
// document.write("Длинна массива [" + array + "] равна =" + array.length);

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// // Длина массива = 5 элементов.
// let array = ['h', 'e', 'l', 'l', 'o'];
//
// // Массив увеличил свой размер на два элемента, новая длина - 7 элементов.
// array.length = 7;
//
// for (let i = 0; i < array.length; i++) {
//     document.write(array[i] + "<br />");
// }
//
// document.write("<hr />");
//
// // Значения всех элементов, которые не попали в новую заданную длину массива, будут утеряны.
// array.length = 2;
//
// for (let i = 0; i < array.length; i++) {
//     document.write(array[i] + "<br />");
// }
// array.length = 5;
// document.write(array.length);
// for (let i = 0; i < array.length; i++) {
//     document.write(array[i] + "<br />");
// }

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// Массивы бывают многомерными,
// для этого в каждый элемент массива следует расположить еще один массив.
// Таким образом возможно реализовать n-мерный массив.

// // Создание многомерного массива.
// let table = new Array(10);
//
// for (let i = 0; i < table.length; i++) { // В таблице 10 строк
//     table[i] = new Array(10);            // В каждой строке 10 столбцов
// }
//
// // Инициализация массива.
// for (let row = 0; row < table.length; row++) {
//     for (let col = 0; col < table[row].length; col++) {
//         if ((row + col) % 2 == 1)
//             table[row][col] = "1";
//         else
//             table[row][col] = "0";
//         //document.write(table[row][col]); //вывод заполненой ячейки сразу
//     }
//    // document.write("<br>");//разрыв строки
// }

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// Методы массивов
// ------------------------------------------------------------------------
//
// concat() -  создает и возвращает новый массив, содержащий элементы исходного массива,
// для которого был вызван метод concat(), и значения всех аргументов, переданных методу concat().
//
// let a = [1, 2, 3];
//
// a = a.concat(4, 5);
// document.write(a);  // 1,2,3,4,5

// a = a.concat(6, 7, [8, 9]);
// document.write(a);  // 1,2,3,4,5,6,7,8,9

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// Метод Join() - преобразует все элементы массива в строки и объединяет их.
// Если метод принимает строковой аргумент, то аргумент станет разделителем вместо запятых.

// let arr = ["September", "October", "November", "December", "January", "Fabruary", "March", "April", "May", "June", "Jull", "August"];
//
// document.write(arr);
//
// let res = arr.join(" | ");
// document.write(res);

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// reverse() - меняет порядок следования элементов массива на противоположный и возвращает переупорядоченный массив.
//
// let a = new Array(1, 2, 3, 4, 5, 6, 7);
//
// a.reverse();  // Меняет порядок следования элементов массива на противоположный.
//
// document.write(a.join("<br>"));

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// slice() - Возвращает фрагмент или подмассив указанного массива.

// let a = [1, 2, 3, 4, 5, 6, 7];
//
// // slice(начальный индекс (включительно), конечный индекс (не включительно));
// let temp = a.slice(0, 3); // возвращает первые три элемента 1, 2, 3
// document.write(temp);
//
// // slice(начальный индекс); -  возвращает подмассив от указанного индекса до конца массива.
// temp = a.slice(3); // 4, 5, 6, 7
// document.write(temp);
//
//
// // Если аргумент отрицательный - он задает позицию относительно конца массива.
// temp = a.slice(1, -2); // 2, 3, 4, 5, 6
// document.write(temp);

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// Метод splice() - универсальный метод для вставки и удаления элементов из массива.
// Метод возвращает массив из удаленных элементов.
// array.splice( start, deleteCount, [elem1[, elem2[, ...[, elemN]]]] )
// start - Индекс в массиве, с которого начинать удаление.
// deleteCount - Кол-во элементов, которое требуется удалить, начиная с индекса start.
// elem1, elem2, ..., elemN - Добавляемые элементы в массив. Добавление начинается с позиции start.

// let a = [1, 2, 3, 4, 5, 6, 7];
// document.write("<p>Исходный массив: " + a);
//
// // УДАЛЕНИЕ.
//
// // splice (начальный индекс, сколько элементов удалить); Если второй аргумент опущен, удаляются все элементы массива до конца массива
// let d = a.splice(1, 3);   // Будут удалены: 2, 3, 4
// document.write("<p>Удалены: " + d);
// document.write("<p>Остались: " + a);
//
// // ВСТАВКА.
//
// // splice (начальный индекс = 1, сколько элементов удалить = 0, значения для вставки с начального индекса = 2, 3, 4);
// a.splice(1, 0, 2, 3, 4);
// document.write("<p>После вставки: " + a);

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// sort() - Сортирует элементы массива в алфавитном порядке
// (при необходимости временно преобразуя элементы в строки для выполнения сравнения).

// let a = [1, 4, 11, 2, 9, 99, 5];
//
// a.sort();
// document.write(a.join("|"));
//
//
// document.write("<hr/>");
//
//
// let s = ["January", "February", "March", "April", "May"];
//
// s.sort();
// document.write(s.join("|"));

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// push() - добавление одного или нескольких элементов в конец и массива возвращает его новую длину.
// (возвращаемое значение - количество элементов в новом массиве)

// let stack = ["January", "February", "March"];
// document.write("<p>Исходный: " + stack.join(" "));
// document.write("<p>Размер массива: " + stack.length);
//
// document.write("<br>");
//
// let lenght = stack.push("April");
// document.write("<p>После добавления: " + stack.join(" "));
// document.write("<p>Размер массива: " + lenght);

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// pop() - выполняет удаление последнего элемента массива, уменьшает длину массива.
// (возвращаемое значение - удаленный элемент массива)

// let stack = ["January", "February", "March", "April", "May", "June"];
//
// document.write("<p>Исходный: " + stack.join(" ") + "</p>");
//
// let lenght = stack.pop();
// document.write("<p>После pop: " + stack.join(" ") + "</p>");

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// shift() - удаляет и возвращает первый элемент массива смещая все последующие элементы на одну позицию вниз,
//           чтобы занять место, освободившееся в начале массива.

// let arr = [1, 2, 3];
//
// document.write("<p>Исходный массив: " + arr.join(" ") + "</p>");
//
// let value = arr.shift();
//
// document.write("<p>Массив после сдвига: " + arr.join(" ") + "</p>");

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// unshift() - добавляет элемент в начало массива. Смещает существующие элементы в сторону больших индексов
//             для освобождения места, добавляет элемент или элементы в начало массива и возвращает новую длину массива.

// let arr = [1, 2, 3];
// document.write("<p>Исходный массив: " + arr.join(" ") + "</p>");
//
// arr.unshift(0);
// document.write("<p>Массив после сдвига: " + arr.join(" ") + "</p>");

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// ОБЪЕКТЫ

// Объект – это составной тип данных,
// он объединяет множество значений в единый модуль и
// позволяет сохранять и извлекать значения по их именам.

// // Создание объекта
// let man = { name: "Bob", surname: "Brown" };
//
// // Вывод значений свойств.
// document.write("Name" + man.name + "<br>");
// document.write("Surname " + man.surname + "<br>");
//
// // Присвоение новых значений свойствам.
// man.name = 'Ivan';       // 1 способ.
// man["surname"] = 'Ivanov';    // 2 способ.

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// Циклическая конструкция for in, используется для перебора
// элементов массива или перебора свойств объекта.
//
// Принцип работы конструкции:
// for ( переменная_итерации in массив_или_обьект) { ...тело конструкции ...}

 let man = {
     name: "Bob",
     surname: "Brown",
     email: "bobik90@icloud.com"
 }

// Перебор значений свойств в обьекте - man
 for (let item in man) {         // создание той переменной, которая будет перебирать свойства в объекте man
     document.write(man[item]);  //выводим на екран переменную которая перебирала свойство
 }

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
