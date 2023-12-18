// Напишите генератор двух случайных чисел в диапазоне между n и m включительно.Учтите,
//  что n и m могут быть отрицательными, а также может быть n > m или n < m.
// Выведите два произвольных числа в консоль с помощью console.log.
// Сравните два полученных числа.Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.
// Проверка результата
// Для проверки подставляйте различные значения m и n и смотрите на корректность результата.
// Так как числа случайные, для одного набора входных параметров рекомендуется запустить код 5–10 раз.
// Примеры чисел m и n, для которых алгоритм должен корректно работать:

let min = -5;
let max = -3;
// min = Math.ceil(min);
// max = Math.floor(max);
let resultOne = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
let resultTwo = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
console.log(resultOne);
console.log(resultTwo);

console.log(`${resultOne} > ${resultTwo}`, resultOne > resultTwo);
console.log(`${resultOne} < ${resultTwo}`, resultOne < resultTwo);
console.log(`${resultOne} >= ${resultTwo}`, resultOne >= resultTwo);
console.log(`${resultOne} <= ${resultTwo}`, resultOne <= resultTwo);
console.log(`${resultOne} === ${resultTwo}`, resultOne === resultTwo);
console.log(`${resultOne} ≠ ${resultTwo}`, resultOne !== resultTwo);


let arr1 = [1, 2, 3, 4, 5];

let arr2 = [6, 7, 8, 9, 10];

function mergeArrays(arr1, arr2) {

const result = [];

let i = 0;

let j = 0;

while (i < arr1.length && j < arr2.length) {

if (arr1[i] < arr2[j]) {

  result.push(arr1[i++]);

} else {

  result.push(arr2[j++]);

}
}

return result.concat(arr1.slice(i)).concat(arr2.slice(j));

}

console.log(mergeArrays(arr1, arr2));