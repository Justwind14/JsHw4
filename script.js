/* Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число */

const arr = [0,1,2,3,4,5,6,7,8,9,10];
for (const el of arr) {
    (el === 0) ? console.log(el + " - это ноль") : (el % 2 === 0) ?
    console.log(el + " – четное число") : console.log(el + " – нечетное число");
}

/* Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7] */
const array = [1, 2, 3, 4, 5, 6, 7];
const circumcisionArr = array.slice(0,3).concat(array.slice(5));
console.log(circumcisionArr);

/* Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3 */

const obj = {
    newArr: 5
}
objOperations(obj);

function objOperations(object) {
    const searchNumber = 3;
    const arrayFromObj = Array.from({length: object.newArr}, (el) => Math.random().toFixed(1)*10);
    console.log(`сгенерирован массив: [${arrayFromObj}] \n 
    Сумма элементов данного массива: ${arrayFromObj.reduce((summ, el) => summ+=el)} \n
    Минимальное число массива: ${Math.min(...arrayFromObj)} \n
    ${(arrayFromObj.indexOf(searchNumber) > 0) ? `В массиве есть число ${searchNumber}` : `В массиве отсутствует число ${searchNumber}`}`);
}


// Задание 4. Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

const hill = Array(20).fill('x');
console.log(hill.shift());
hill.reduce((summX, el) => {
    const currentSumm = el +summX;
    console.log(currentSumm);
    return currentSumm;
})
