// png (Portable Network Graphics - Портативная сетевая графика. Произносится так же как ping, т.е. [pɪŋ])

// У text-transform есть 5 значений:
// text-tranform: capitalize (Первая Буква Каждого Слова Будет Большой)
// text-tranform: lowercase (все буквы будут маленькими)
// text-transform: uppercase (ВСЕ БУКВЫ БУДУТ БОЛЬШИМИ)
// text-transform: none (отменяет предыдущие форматирование)
// text-tranform: inherit (наследует форматирование родителя)


//Методы создания регулярного выражения 

// HTTP - протокол для передачи гипертекстовых страниц
// первый сайт появился 6 августа 1991 года.Его создатель, Тим Бернерс-Ли,(Его создатель, Тим Бернерс-Ли,)











// 1) конструктор: 
let str1 = new RegExp('Шаблон', 'Флаги');

// 2) С помощью литералов / /
let str2 = /Шаблон/i; // i - это флаг



//Флаги 

// i - Не чувствителен к регистру
// g - Глобальный поиск 
// m - Многострочный поиск 



// Методы RegExp

// 1) search - возвращает первое что нашел, если нет то -1
// 2) test - проверяет на совпадение, если есть возвращает true/false
// 3) split - берет обычную строку, и разбивает его в массив. 
// С помощью регулярного выражения или подстроки
// 4) match - используется для поиска совпадений в регулярном выражений,
// и возвращает массив с найденными совпадениями.
// 5) replace - находить элемент в строке и заменяет его  




// 3.1 split структура:
str.split(separator, limit)

// 1) separator - Это наш разделитель, который может быть 
// как строкой, так и регулярным выражением 

// 2) limit (необязательный) - максимальное каличество элементов, которые будут в массиве


// Пример с обычной строкой 
const str3 = 'I,you,him,she'
const parts = str.split(',')
console.log(parts);

//Пример с регулярным выражением 
const str4 = 'Как_разделять-строки? По пробелу, и, дефису!'
const regex = /[\s\-]+/;
const parts2 = str.split(regex)
console.log(parts2);





//4.1 match 

// 1) result[0] - вытаскивает первый элемент из массива.
// 2) result.index - покажет индекс этого элемента (который мы искали). если он 5 в строке нам покажут что его индекс 4.
// 3) result.input - показывает всю строку от куда мы взяли этот самый элемент.

// 4) если есть флаг g(глобальный поиск) match возвращает обычный массив из всех совпадений 
// 5) если ничего не найдено - null





//5.1 replace - структура и несколько примеров:

//1) 
const str5 = 'Я хочу заменить это слово.'
const regex2 = /это/;
const result = str5.replace(regex, 'то')
console.log(result);

//2)
const str6 = 'Этот текст содержит несколько слов слово слово.'
const regex3 = /слово/g;
const result2 = str6.replace(regex3, 'замена')
console.log(result2);

//3)
const str7 = 'Hello, World!'
const regex4 = /(\w+), (\w+)!/;
const result3 = str.replace(regex4, function (match, first, second) {
    return second + '' + first + '!';
});
console.log(result3);




//Буквенные классы: 

// \d - Любая цифра
// \w - Латинская буква, цифра
// \s - Пробел

// \D - Любой символ кроме \d
// \W - Любой символ кроме \w
// \S - Любой символ кроме \s
//  . - Любой символ кроме \n





// Якоря 

// ^ - начало строки 
// $ - конец строки 
// \b - 
// console.log(
//     /\bjava\b/i.test('Java Script')
// );





// Квантификатор 

// {n} - точное количество
// {n1, n2} - от n1 до n2
// {n, } - больше либо равно n

// *Сокращение 

// + {1,} - от 1 до бесконечности
// ? {0,1} - от точки до точки 
// * {0,} - от 0 и выше






// !!! Перед этими символовами обязательно '\' ( [ \ ^ $ ( ) . | ? * + / ) 






// Наборы, диапозоны 

//[sbr] - любой символ из скобок 
//[0-9]
//[A-Z]
//[a-z]
//[а-яё] - от а до я, внутри нет ё поэтому его пишем рядом

// можно добавить исключение ^ [^sdf]
//[^0-9], \D - не цифра 
//[/s/d/D] - можно также писать в [] флаги 




////////////////////////////

// Рекурсия - это техника в программировании, при которой функция вызывает саму себя для решения задачи.

//Синтаксис: 
function f() {
    f()
}



//Стек вызовов: 
function ask(name) {
    console.log(`How are you, ${name}`);
}
function greet(name) {
    ask(name);
}
function bye(name) {
    console.log('ok, bye')
}
function hello(name) {
    greet(name);
    bye();
}
hello('Alex');

// 1) В стэк сначала входит Hello, стек его читает и выполняет greet 
// который находиться внутри него.

// 2) нас перекидывает в функцию greet, стек читает его
// выполняет ask. И нас снова перекидывает в функцию ask

// 3) У ask выполняется консоль. 

// 4) Таким образом мы возвращаемся в Hello и выполняем вторую внутри него

// 5) Нас перекидывает в функцию bye. Она выполняется последней



// Базовый случай 
//Отвечает за то что бы стек не заполнился. Вызывает саму себя и задает условия завершения функции (то-есть результат который мы хотим получить)
if (i <= 0) {
    return;
}



//Рекурсивный случай 
// решает мелкие подзадачи и прописывает способ по которому мы достигнем желаемого результата.

return n * factorial(n - 1);





// Для вычисления суммы чисел от 1 до 5:

// Вызов: sum(5)
//     Вызов: sum(4)
//         Вызов: sum(3)
//             Вызов: sum(2)
//                 Вызов: sum(1) //(базовый случай)
//             Возврат: 1
//         Возврат: 3
//     Возврат: 6
// Возврат: 10  // Итоговый результат: 10



// ! Если и это не понятно то более подробное объяснение: !

// 1) Вызов factorial(5) помещается в стек вызовов.
// 2) Внутри функции factorial(5) происходит проверка: n === 1 - это не выполняется, так как n равно 5.
// 3) Вместо этого, выполнение переходит к следующей строке, где происходит вызов factorial(4).
// 4) Вызов factorial(4) помещается в стек вызовов.
// 5) Внутри функции factorial(4) снова проверяется n === 1 - это не выполняется, так как n равно 4.
// 6) Снова происходит вызов factorial(3).
// 7) Этот процесс повторяется до того момента, пока не достигнется базовый случай.

// После достижения базового случая (n === 1), начинается возврат значений:

// 1) Вызов factorial(1) достиг базового случая.
// 2) Он возвращает 1.
// 3) Затем выполнение переходит обратно к вызову factorial(2), который теперь может завершиться, так как он знает значение factorial(1) равное 1.
// 4) Он возвращает 2 * 1, то есть 2.
// 5) Затем вызов factorial(3) завершается, возвращая 3 * 2, то есть 6.
// 6) Точно так же завершаются вызовы factorial(4) и factorial(5).

// Итак, весь стек вызовов разворачивается в обратном порядке, а результатом всей цепочки вызовов является искомое значение
// факториала 5, которое равно 120.






///////////////////////////////


//Event loop - Цикл событий 
// Это часть браузера, которая следит за Call Stack 
// и очередями Web API. Он проверяет, есть ли что-то 
// в очередях, и если есть, то перекладывает это в 
// Call Stack для выполнения.


// Call ctack - 
// Место где хранятся выполняющиеся функции js
// он работает по принципу LIFO - Last-In-First-Out( последним пришел, первым ушел)
// после выполнения, функция удаляется из колл-стека


// Web API - Предоставленный браузером.
// Работает с асинхронным кодом, таймерами, с сетью, DOM-события и т. д. 
// Туда добавляются операции для выполнения в будущем



// ИТОГ: 
// Event Loop - это механизм в JavaScript, который контролирует
// выполнение асинхронного кода, управляет событиями и 
// обработкой коллбэков. Он включает в себя Call Stack для 
// синхронного кода, Web API для асинхронных операций, и 
// Event Loop, который следит за выполнением и перемещает 
// операции из Web API в Call Stack, а также выполняет 
// коллбэки, обеспечивая отзывчивость веб-приложений.




// 1) Асинхронность - программы могут выполняться вместе или 
// переключаться между собой.
// также задачи которые требуют много времени для выполнения
// могут выполняться в фоновом режиме. 

function asynchronousFunction() {
    console.log("Начало асинхронной функции");
    setTimeout(function () {
        console.log("Задача внутри таймера завершилась");
    }, 1000);
    console.log("Конец асинхронной функции");
}

asynchronousFunction();
console.log("После вызова асинхронной функции");

// Начало асинхронной функции
// Конец асинхронной функции
// После вызова асинхронной функции
// Задача внутри таймера завершилась





// 2) Синхронность - задачи выполняются по порядку,
// ожидает выполнения текущей задачи, прежде чем 
// начнет выполнятся следующая.

function synchronousFunction() {
    console.log("Начало синхронной функции");
    for (let i = 0; i < 3; i++) {
        console.log("Шаг " + i);
    }
    console.log("Конец синхронной функции");
}

synchronousFunction();
console.log("После вызова синхронной функции");




// setTimeout / setInterval -
// это функции в javascript для выполнения асинхронных  
// операции с таймерами 


// 1) setTimeout - 
// Используется для запуска функции через определенное
// количество времени после вызова.
// Чакырылгандан кийин белгилүү бир 
// убакыттын ичинде функцияны иштетүү үчүн колдонулат.

// setTimeout используется для выполнения кода один раз 
//через определенный интервал времени.



// Синтаксис: setTimeout(callback, delay).
// callback - функция, которую нужно выполнить, и delay
// - задержка в миллисекундах до выполнения этой функции.

setTimeout(function () {
    console.log('Функция выполнена через 2 секунды');
}, 2000) // Скобку обязательно 

// 2) setInterval - 
// Отвечает за регулярное выполнение функции 
// с определенным интервалом времени.
// Синтаксис: setInterval(callback, interval).
// callback - функция, которую нужно выполнить, и 
// interval - интервал в миллисекундах между выполнениями функции.

//setInterval используется для выполнения кода повторно 
//через определенные интервалы времени.
/////////////////////////////////////////////////////////
// Айырмачылыктар алардын иштешинде: setTimeout кодду берилген 
//кечигүүдөн кийин бир жолу аткарат, ал эми setInterval кодду 
//ар бир аткаруунун ортосунда белгиленген интервал менен аткарат.

let counter = 0;
const intervalId = setInterval(function () {
    counter++;
    console.log('interval', counter);

    if (counter === 5) {
        clearInterval(intervalId)
    }
}, 1000);





// Микро/Макро задачи - играют важную роль в управлении асинхронного кода 



// 1) Микрозадачи - для не больших и быстрых операций 
// которые должны выполниться в этом цикле 

// Работает по порядку FIFO(первый зашел, первый вышел)
// выполняются после синхронного кода и промисов 

// Что в него входит?
// 1 - Колл-бэк промисов (.catch .then .finally)
// 2 - Мутации DOM 

//# Он идет напрямую в очередь. не входит в web API 


// 2) Макрозадачи - Для больших и длительных операция 
// такие как таймеры и сетевые запросы 

// Выполняется после микрозадач и текущего цикла Event loop (Синхронный код)

// Что в него входит?
// 1 - Таймеры (setTimeout, setInterval)
// 2 - Сетевые запросы (XMLHttpRequest, Fetch)
// 3 - Обработка событий (Клик мыши, нажатие клавиш)





/////////////////////////////////////

// Json - (Javascript object notation) 
// Был создан Js-том но используется во многих других 
// языках программ.
// Нужен для обмена данными. 




// API - (Application Programming Interface)
// это набоп правил и инструкции для обмена запросом между программами 
// Веб-апи позволяет моей программе взяимодействовать с удаленным сервером
// как мост между моей (программой ========= удаленным сервером)




//Fetch - Мощный интсрумент, отправляет запрос на сервер и обрабатывает ответ
// 1) Выполняет HTTP запросы
// 2) Позволяет Веб-приложениям взяимодействовать с сервером.
// 3) Обрабатывает различные типы данных, такие как JSON, 
// текст, XML и другие. 

// По умолчанию он делает GET запросы 
// Что бы работать с другие методы надо их указать 



// Структура: 
fetch(url, options)
    .then(response => {
        // Обработка ответа
    })
    .catch(error => {
        // Обработка ошибки
    });

// url - URL-адрес, на который отправляется запрос
// options - объект, это настройки запроса. например:
// Методы (GET, POST, DELETE), заголовки, тело запроса и т. д.



//Пример получения данных. 2 Способа: 

//1) С промисами -
function getDate() {
    const response = fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((res) => console.log(res));
}
getDate()


//2) acync / await

//acync - Делает функцию асинхронной 
//await - Ждет ответа (данные) от сервера (промиса) и отобразит их. 

async function getDate() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos') // Ожидание ответа от сервера
    let result = await response.json();// Ожидание преобразования данных в JSON
    console.log(result);
}
getDate()

// acync - ключевое слово которое объявляет асинхронную функцию 
// выполняет асинхронные операции и всегда возвращает промис 
// промис разрешается когда функция закончит асинхронную операцию 

// await - ключевое слово - используется внутри асинхронной функции
// для приостановки выполнения операции. 
// Ждет резрешения промиса и возвращает результат 


///////////////////////////////

// HTTP Code Status - 

// 100 - 199) Информационные
// 200 - 299) Успешные
// 300 - 399) Перенаправленные 
// 400 - 499) Ошибки клиента 
// 500 - 599) Ошибки сервера



/////////////////////////
//# res - обработка ответа от сервера, переданный в промис
//# парсить 

// Параметры функции колл-бэк: 
//# item - представляет элемент массива
//# i - index
/////////////////////////




// HTTP methods -
// GET - Получение информации от сервера 
// POST - Отправление данных на сервер
// DELETE - Для удаления ресурса из сервера 
// PUT - Обновляет существующий ресурс на сервере
// PATCH - Для частичного обновления ресурса на сервере 

// Сервер обновляет только те данные которые были 
// указаны в запросе.



/////////////////////////////////
// Rest api - для обмена данных с клиентскими приложениями и сервером
// Придставляет уникальный url-адрес в который можно отпралять запросы и получать ответы 
// включает в себя http методы, url-адреса для: 
// предоставление данных (например в формате j-son)
// отправлять http запросы 




// http -  протокл позвалющий обмениваться данными через интернет,
// браузерам и серверам обнемиваться информацией
// включает в себя методы (GET. POST. PUT. PATCH. DELETE) заголовки и т д




// https - Это протокол. тотже http но защищенная версия 
// также можно обмениваться данными, он их шифрует 
// передает такие данные как: Логин, пароль, банковская информация.



// Коллбэк - функция обратного вызова 
// Это коллбек который передаем в качестве аргумента в другую функцию 
// выполняет определенные задачи которую мы зададим 


//# То есть у нас функция и там в параметрах коллбэк, мы ее в качестве 
// аргумента передаем в другую функцию для асинхронногой операции 

function doSomething(callback) {
    // Здесь выполняется какая-то работа

    // Затем вызываем коллбек
    callback();
}
function myCallback() {
    console.log("Коллбек выполнен!");
}

// Вызываем функцию и передаем коллбек
doSomething(myCallback);






//Promise - используется для отложенный и асинхронных вычислений 
// Он принимает аргумент, коллбэк, также исполнительную функция
// которая принимает два аргумента (resolve, reject)


//Состояние промисов (терминология)

// Три состояния 
// 1) Нерешенный (в ожидании) ответа: pending 
// 2) успешное выполнение: resolve
// 3) выход ошибкой (отклоненный): reject 



//Создание промисов 

// (В большинство случаев мы не создаем промисы, 
//а просто используем)

//Синатксис конструтор: 

const promise = new Promise((resolve, reject) => {
    //...
})




//Исполнительная функция выполняется сразу после промиса 
// resolve() и reject()

// 1) 
const promise1 = new Promise((resolve, reject) => {
    if (allWentWell) {
        resolve('Все прошло отлично!');
    } else {
        reject('Что-то пошло не так')
    }
});

// 2) Еще один пример:

const promise2 = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    setTimeout(() => {
        if (randomNumber < .6) {
            resolve('Все прошло отлично!');
        } else {
            reject('Что-то пошло не так');
        }
    }, 2000);
});
console.log(promise2);




//# у промиса может быть только один статус: выполнен или откленен 

const promise3 = new Promise((resolve, reject) => {
    resolve('Promise resolved'); //Этот был выполнен первый, так что получает этот статус
    reject('Promise rejected');
});




// Использование промиса 

// Методы промиса: 
// 1) .then()
// 2) .catch()
// 3) .finally()


// 1.1) .then() синтаксис: 
Promise.then(successCallback, failureCallback)

// successCallback - вызывается когда промис был успешно выполнен. 

//failureCallback - вызывается когда промис отклонен.

const promise4 = new Promise((resolve, reject) => {
    const randomNumber = Math.random();

    if (randomNumber < .8) {
        resolve('Все прошло отлично!')
    } else {
        reject('Что-то пошло не так')
    }
});

promise4.then((data) => {
    console.log(data);
},
    (error) => {
        console.log(error);
    });



// 2.2) .catch() Синтаксис:
promise.catch(failureCallback)

//используется при обработке ошибок, это легче чем делать 
//это с помощью failureCallback 

const promise5 = new Promise((resolve, reject) => {
    reject(new Error('Что-то пошло не так'));
});
promise5
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })




// Цепочка промисов .then() 

// В конце предыдущего .then() можно добавить еще один .then()
// когда хотим последовательно (по определенному порядку) выполнить 
// промисы. 

// Пример:
const promise6 = new Promise((resolve, reject) => {
    resolve('Promise6 выполнен');
});
const promise7 = new Promise((resolve, reject) => {
    resolve('Promise7 выполнен');
});
const promise8 = new Promise((resolve, reject) => {
    reject('Promise8 отклонен')
})
promise6
    .then((data) => {
        console.log(data);
        return promise7;
    })
    .then((data) => {
        console.log(data);
        return promise8;
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

//Достаточно одного метода .catch() для обработки ошибок
//при условии что это в цепочке и находиться в конце нее


//Promise.all()

// Берет [] и возвращает отработанный новый промис
// после проверки если все успешно то статус 'успешно'
// если хоть один отклоненный то статус 'отклонен' 

const promise9 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise9 выполнен');
    }, 2000);
});
const promise10 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise10 выполнен')
    }, 1500);
});

Promise.all([promise9, promise10])
    .then((data) => console.log(data[0], data[1]))
    .catch((error) => console.log(error));



// Promise.race()

// Принимает масисв промисов и возвращает один новый промис
// если первым встретил успешный промис то статус 'Успешно'
// если первым встретил отклоненный то статус 'отклонен' 

// Отсюда и название Race() - Гонка 

const promise11 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise11 выполнен');
    }, 1000);
});
const promise12 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise12 отклонен');
    }, 1500);
});

Promise.race([promise11, promise12])
    .then((data) => console.log(data[0], data[1]))
    .catch((error) => console.log(error));

//////////////////////////////////////////////////////////////////////////////
// 1 lesson
// ⁃ React

// 2 lesson
//  ⁃ State, useState

// 3 lesson
//  - Component, props

// 4 lesson 
// ⁃ Жизненные циклы компонента,
// - useEffect

// 5 lesson
// ⁃ Классовые компоненты
// - componentDidMount

// 6 lesson 
//  ⁃ React Router DOM
//  -  Context API

// 7 lesson 
// -  Context API
// -  Firebase

// 8 lesson 
// -  Firestore 
////////////////////////////////////////////////////////////////////////////////////////////////

// 1 lesson 
// React — это библиотека JavaScript, разработанная компанией Facebook, которая используется для создания пользовательских интерфейсов (UI) в веб-приложениях. React позволяет разработчикам создавать большие и сложные интерфейсы, разбивая их на компоненты. Эти компоненты являются переиспользуемыми и могут взаимодействовать между собой, что упрощает управление состоянием и обновлением пользовательского интерфейса.

// Одной из ключевых особенностей React является использование виртуального DOM (Document Object Model), что позволяет эффективно обновлять только те части интерфейса, которые действительно изменились, вместо полного перерисовывания страницы. Это повышает производительность веб-приложений.

// React также поддерживает однонаправленный поток данных, что упрощает отслеживание изменений в данных и их передачу между компонентами. React также интегрируется хорошо с другими библиотеками и фреймворками, что позволяет использовать его в различных экосистемах разработки.

// React часто используется в сочетании с другими инструментами и библиотеками, такими как Redux для управления состоянием приложения, React Router для навигации, и многими другими.
//  React – бул Facebook тарабынан иштелип чыккан JavaScript китепканасы, ал веб-тиркемелерде колдонуучу интерфейстерин (UI) түзүү үчүн колдонулат. React иштеп чыгуучуларга чоң жана татаал интерфейстерди түзүүгө, аларды компоненттерге бөлүүгө мүмкүндүк берет. Бул компоненттер кайра колдонууга болот жана бири-бири менен өз ара аракеттениши мүмкүн, бул абалды башкарууну жана колдонуучунун интерфейсин жаңыртууну жеңилдетет.


// Одной из главных особенностей React является использование виртуальной DOM (объектной модели документа), которая позволяет эффективно обновлять только те части интерфейса, которые действительно изменились, вместо того, чтобы перерисовывать всю страницу. Это повышает производительность веб-приложений.
// Reactтин негизги өзгөчөлүктөрүнүн бири – виртуалдык DOM (Документ Объектинин Модели) колдонуу, ал интерфейстин бардык бетти кайра чийүүнүн ордуна, иш жүзүндө өзгөргөн бөлүктөрүн гана эффективдүү жаңыртууга мүмкүндүк берет. Бул веб-тиркемелердин иштешин жакшыртат.


// React часто используется в сочетании с другими инструментами и библиотеками, такими как Redux для управления состоянием приложения, React Router для навигации, и многими другими.
// React көбүнчө колдонмонун абалын башкаруу үчүн Redux, навигация үчүн React Router жана башкалар сыяктуу башка куралдар жана китепканалар менен бирге колдонулат.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 2 lesson 
// useState - это хук (hook) в библиотеке React, который позволяет функциональным компонентам использовать состояние. 
// useState - бул функционалдык компоненттерге абалды колдонууга мүмкүндүк берген React китепканасындагы илгич
// Он возвращает пару значений: текущее состояние и функцию, позволяющую обновить это состояние.
// Ал бир жуп баалуулуктарды кайтарат: учурдагы абал жана ошол абалды жаңыртуу функциясы.
// например
// В этом примере count - это текущее значение состояния, и setCount - функция для его обновления
// Бул мисалда count - учурдагы абалдын мааниси, ал эми setCount - аны жаңыртуу функциясы. 
///////
// State - компонент жөнүндө маалыматты камтыган объект.
// State - это объект, содержащий информацию о компоненте. 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3 lesson 
// Mounting (Монтирование):

// constructor(): Инициализация компонента.
// render(): Отображение компонента.
// componentDidMount(): Вызывается после того, как компонент был добавлен в DOM.
// Updating (Обновление):

// shouldComponentUpdate(): Определяет, следует ли компоненту обновиться.
// render(): Обновление отображения компонента.
// componentDidUpdate(): Вызывается после обновления компонента.
// Unmounting (Размонтирование):

// componentWillUnmount(): Вызывается перед тем, как компонент будет удален из DOM.
// Error Handling (Обработка ошибок):

// constructor(props): конструктор, в котором происходит начальная инициализация компонента

// componentDidMount(): вызывается после рендеринга компонента. Здесь можно выполнять запросы к удаленным ресурсам
//componentWillUnmount(): вызывается перед удалением компонента из DOM
//

// componentDidCatch(): Вызывается при возникновении ошибки в дочерних компонентах.
/////
// useEffect – бул компонентти тышкы система менен синхрондоштурууга мүмкүндүк берген React илгич.
// useEffect - это хук React, который позволяет вам синхронизировать компонент с внешней системой.

// 4 lesson 
// Жизненные циклы компонента -Каждый компонент React проходит несколько стадий в процессе своей жизни: он создается, затем добавляется в DOM, получает пропсы, и, наконец, удаляется из дерева. Этот процесс называют жизненным циклом компонента (Component Lifecycle).
// Жизненные циклы компонента - Ар бир React компоненти өз өмүрүндө бир нече этаптардан өтөт: ал түзүлөт, андан кийин DOMга кошулат, реквизиттер кабыл алынат жана акыры дарактан алынып салынат. Бул процесс Компоненттин жашоо цикли деп аталат.

// useEffect — это крючок в библиотеке React, который позволяет функциональным компонентам выполнять побочные эффекты. Побочные эффекты включают загрузку данных, подписку на события, изменения DOM и т. д. useEffect выполняет эти побочные эффекты после рендеринга каждого компонента.
// useEffect - бул React китепканасындагы функционалдык компоненттерге терс таасирлерди аткарууга мүмкүндүк берген илгич. Терс таасирлерге маалыматтарды жүктөө, окуяларга жазылуу, DOM өзгөрүүлөрү ж.б. кирет. useEffect ар бир компонентти көрсөткөндөн кийин бул терс таасирлерди иштетет.

// 5 lesson
// React.js (библиотека JavaScript для создания пользовательских интерфейсов) компоненты могут быть функциональными или основанными на классах. Компоненты класса создаются с использованием классов JavaScript, которые расширяют базовый класс React.Component. Обычно они включают состояния компонентов и методы жизненного цикла.
// React.js (колдонуучу интерфейстерин түзүү үчүн JavaScript китепканасы) жагынан компоненттер функционалдык же класска негизделген болушу мүмкүн. Класс компоненттери базалык React.Component классын кеңейтүүчү JavaScript класстары аркылуу түзүлөт. Алар, адатта, компоненттердин абалын жана жашоо циклинин ыкмаларын камтыйт.

//компонентDidMount — это метод жизненного цикла в React, который вызывается сразу после монтирования (вставки) компонента в DOM (объектную модель документа). Этот метод является частью жизненного цикла компонентов React и предоставляет способ выполнения кода, который необходимо выполнить после добавления компонента в DOM.
// componentDidMount – бул Reactдагы жашоо циклинин ыкмасы, ал компонент DOMга (Документ объектинин модели) орнотулгандан (киргизилгенден) кийин дароо чакырылат. Бул ыкма React компонентинин жашоо циклинин бир бөлүгү жана компонент DOMга кошулгандан кийин аткарылышы керек болгон кодду аткаруунун жолун камсыз кылат.

///////////////////////////////////////////////////////////////////////

// lesson 1   5-month

// Higher Order Components (HOC) 
// Higher Order Component - это функция, которая принимает
// компонент как пропс и возвращает новый компонент с дополнительными
// свойствами или функциональностью.

// HOC предоставляет способ повторного использования логики компонента, добавляя ее к другим компонентам. 
//Это обеспечивает более высокую степень абстракции и чистоты кода.

// HOC не является самостоятельным компонентом, а, скорее, функцией, которая принимает компонент и возвращает новый компонент.
//HOC в React означает компонент высшего порядка.
/////////////////////////////////////////////////////////////////////

// HOC компоненттин логикасын кайра колдонуу, ошондой эле компонентти пакеттөө 
//жана функцияларды кошуу үчүн колдонулат. Алар абстракциянын жогорку деңгээлин 
//камсыз кылат жана таза, модулдук кодду түзүүгө жардам берет.

// HOC in React "Жогорку тартиптеги компонент" дегенди билдирет. 
//Жөнөкөй сөз менен айтканда, бул компонентти кабыл алган 
//жана кошумча мүмкүнчүлүктөрү бар жаңы компонентти кайтарган функция.
// HOC өз алдынча компонент эмес, тескерисинче, компонентти кабыл алып, 
//жаңы компонентти кайтаруучу функция.

////////////////////////////////////////////////////////////
// useMemo - это хук в библиотеке React, который используется для 
//мемоизации значений. Он позволяет оптимизировать производительность компонентов, 
//сохраняя предыдущее значение и пересчитывая его только в случае изменения зависимостей.

// useCallback - это ещё один хук в библиотеке React, который используется для мемоизации колбэк-функций. 
// Он помогает оптимизировать производительность компонентов, предотвращая создание новой функции при каждом рендеринге.

// В чем разница между useCallback и useMemo?
// useCallback кэширует саму функцию.

// useMemo кэширует результат вызова вашей функции.
// useCallback кэширует саму функцию


// В отличие от useMemo , он не вызывает предоставленную функцию
////////////////////////////////////////////////////////////

// lesson 2   5-month

// Redux — библиотека для JavaScript с открытым исходным кодом, 
//предназначенная для управления состоянием приложения

// Redux бул колдонмонун абалын башкаруу үчүн ачык булак 
// JavaScript китепканасы
// Redux - это библиотека управления состоянием для приложений на JavaScript
// 

// Основные понятия Redux:

// Состояние (State) и хранилище (Store).
// Действия (Actions).
// Редьюсеры (Reducers).
// Промежуточное ПО (Middleware).

////////////////////////////////////////////////////////////
// redux - это библиотека для работы с состоянием приложения 
// state - состояние 
// actions - выполняет определенные функции и попадает в Dispatcher
// Dispatcher - обновляет Store
// Обновленный Store оповещает View об изменении
// reducer — чистая функция которая будет отвечать за обновление состояния.

// Шаг 1: Установка Redux
// npm install redux react-redux

// Шаг 2: Импорт необходимых библиотек
import { createStore } from 'redux';

// Шаг 3: Определение начального состояния
const initialState = {
    counter: 0,
};

// Шаг 4: Определение редуктора (функции, обрабатывающей действия)
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 };
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
};

// Шаг 5: Создание хранилища с использованием редуктора
const store = createStore(reducer);

// Шаг 6: Диспетчинг действий для изменения состояния
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });

// Шаг 7: Получение текущего состояния
const currentState = store.getState();

// Шаг 8: Вывод текущего состояния в консоль
console.log(currentState);

// lesson 3 5 month
//  Мидлвары (middlewares) — это функции, которые 
//последовательно вызываются во время обновления данных в хранилище.
//
//lesson 4 5-m
// Redux Toolkit - это набор удобных утилит для работы с библиотекой 
//управления состоянием Redux в приложениях на React. 
//
//Некоторые ключевые возможности и инструменты Redux Toolkit включают в себя:

// configureStore: Функция для создания Redux store с предварительно настроенными параметрами, такими как middleware, devtools и другие.

// createSlice: Функция для создания среза (slice) Redux reducer. Она автоматически генерирует действия (actions) и редюсеры (reducers) на основе определенной вами начальной структуры данных.

// createAsyncThunk: Утилита для упрощения обработки асинхронных операций. Она генерирует действия для запроса, успеха и ошибки, связанных с асинхронной операцией.

// createEntityAdapter: Помогает в управлении нормализованными данными в Redux store, особенно полезен при работе с данными из API.

// immer: Интегрированная библиотека для более простой и удобной работы с неизменяемыми данными в редюсерах.


//////////////////////////////////////////////////////////////////////////////

// Redux toolkit - это настройка, которая сокращает количество кода
//
//
//
//
//
//
//











