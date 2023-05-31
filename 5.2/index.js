const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
//Every
// const passTest1 = (currentValue) => currentValue  >= 0;
// const passTest2 =(currentValue) => currentValue.length < 8;
// console.log(nums.every(passTest1));
// console.log(panagram.every(passTest2));
//Filter creates a shallow copy of a portion of the given array
// const filterTest1 = nums.filter(nums =>nums < 4);
// const filterTest2 = panagram.filter(panagram => panagram.length % 2 === 0);

// console.log(filterTest1);
// console.log(filterTest2);
//Find
// const found1 = nums.find(element => element % 5 ===0);
// const found2 = panagram.find(element => element.length > 5);
// console.log(found1);
// console.log(found2);
//Find Index
// const findIndex1 = (element) => element % 3 === 0;
// const findIndex2 = (element) => element.length < 2; 
// console.log(nums.findIndex(findIndex1));
// console.log(panagram.findIndex(findIndex2));
//For Each- performs and action to the array but does not modify the array, you can store the values from a forEach();
// const forEach1 = nums.forEach((element => {console.log(element * 3);
// }));
// const forEach2 = panagram.forEach((element => {console.log(element + '!');
// }));
// Map the array remains the same and can be stored into another array
// const map1 = nums.map( x => x * 100);
// const map2 = panagram.map( x => x.toUpperCase());
// console.log(map1);
// console.log(map2);
// Some
// const some1 = (element) => element % 7 === 0;
// const some2 = (element) => element.includes('a');
//Reduce - does not modify the array instead tries getting one value
// const initialValue = 0;
// const sumOfAll = nums.reduce((acc, element) =>
//                             acc + element, initialValue
// );
// console.log(sumOfAll);
// const removeSpaces = panagram.reduce((acc, element) =>  acc + element);
// console.log(removeSpaces);
// Sort
// console.log(nums.sort()); I expected all the numbers to be in order
// console.log(panagram.sort()); I expected the words to be sorted in abc order
// console.log(nums.sort((a, b) => a-b));
// console.log(nums.sort((a, b) => b-a));
// console.log(panagram.sort((a,b) => a-b));
console.log(panagram.sort());