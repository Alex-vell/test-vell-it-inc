/*3. JS: кликаем по кнопке - видим в alert-е то, что введено в поле поиска.
 Не использовать onclick атрибут в разметке кода.
4.Если ввести в поиск слово google и нажать кнопку НАЙТИ,
 то нужно показать в алерте “Yandex круче. Но это не точно”*/
const inputValue = document.querySelector('.input');
const buttonClick = document.querySelector('.button');

buttonClick.addEventListener('click', () => {
    if (inputValue.value === 'google') {
        setTimeout(() => alert('Yandex круче. Но это не точно'), 3000);
    } else {
        setTimeout(() => alert(inputValue.value), 3000);
        setTimeout(() => alert(arrUser[0].name), 3000);
    }

})

/* 5. Создать массив объектов. 3-4 объекта, каждый имеет свойства name и age.
    При нажатии на кнопку НАЙТИ также вывести ещё и св-во name первого объекта в массиве*/
const arrUser = [
    {
        name: 'Alex-first',
        age: 28
    },
    {
        name: 'Natali',
        age: 25
    },
    {
        name: 'Anna',
        age: 1
    }

]

//6. Создать функцию superSum, которая будет в алерте показывать сумму ЛЮБЫХ двух чисел,
// переданных этой функции через параметры

const superSum = (a, b) => {

    alert(a + b + ' ' + 'superSum');
}
superSum(5, 10);

//7. Создать массив из чисел в перемешку (не отсортированы).
// С помощью цикла for найти максимальный и минимальный элементы в массиве

const arrNum = [2, 5, 12, 44, 1, 22];
let min = arrNum[0];
let max = arrNum[0];

for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] < min) {
        min = arrNum[i];

    }
    if (arrNum[i] > max) {
        max = arrNum[i];
    }
}
alert(min + ' ' + 'nin');
alert(max + ' ' + 'max');

//8. Создать 2 переменные a и b… присвоить им любые значения.
// Потом программно поменять эти значения местами, не используя значения напрямую

let a = 'XXX';
let b = 'YYY';

[a, b] = [b, a];

console.log(a);
console.log(b);

//9. Оформить алгоритм поиска максимального числа в массиве как функцию findMax
// (чтобы можно было передавать в неё любой массив чисел,
// а на выходе она возвращала нам максимальное число из массива)

const numArray = [2, 33, 1, 32, 555, 51, 1000];


/*function findMax(numArray) {
    let i;
    let max = -Infinity;
    for (i = 0; i < numArray.length; i++) {
        if (numArray[i] > max) {
            max = numArray[i];
        }
    }
    return max;
}*/
function findMax(numArray) {
    return Math.max(...numArray);
}

console.log('findMax' + ' ' + findMax(numArray));

//10. показать alert с результатом поиска не сразу, а через 3 секунды после нажатия
// (всё то же самое, как и работало, в частности с “яндекс круче всех”, но с задержкой в 3 секунды)

