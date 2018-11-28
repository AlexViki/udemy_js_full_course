// 1
let x = 2;
console.log('1: ' + x++);

// 2
let result_2 = [] + false - null + true;
console.log('2: ' + result_2);

// 3
let a = 1;
let b = a = 5;
console.log('3: ' + b);

// 4
let result_4 = [] + 1 + 2;
console.log('4: ' + result_4);

// 5
console.log('5: ' + "1"[0]);

// 6
let result_6 = 2 && 1 && null && 0 && undefined;
console.log('6: ' + result_6);
// console.log(2 && 1);
// console.log(1 && null);
// console.log(null && 0);
// console.log(null && undefined);

// 7
let result_71 = !!(2 && 2);
let result_72 = (2 && 2);
console.log('7: ' + result_71 + '; ' + result_72);

// 8
let result_8 = null || 2 && 3 || 4 ;
console.log('8: ' + result_8);

// 9
let arrA = [1,2,3];
let arrB = [1,2,3];
let resArr = arrA == arrB
console.log('9: ' + resArr);

// 10
let inf = (+'Infinity');
console.log('10: ' + inf);

// 11
let st1 = "Ёжик";
let st2 = "яблоки";
let resSt = st1 > st2;
console.log('11: ' + resSt);

// 12
let resultN12 = (0 || "" || 2 || undefined || true || false);
console.log(resultN12);