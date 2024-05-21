// Get elements by type selector
let element = document.querySelector('h1');
console.log('element', element)

// Get all the type selectors
let element4 = document.querySelectorAll('span');
console.log('elements4', element4)

// Get element by Id
let element2 = document.getElementById('dommy');
console.log('element2', element2)

// Get elements by Id
let element3 = document.getElementById('middleSpan');
console.log('element3', element3)

// Get elements by Class Name
let element5 = document.getElementsByClassName('dommy2');
console.log('element5', element5)

let element6 = document.getElementsByTagName('section');
console.log('element6', element6)

let arr = [1, 2, 3, 4, 5, 6, 7]

// pop method
let arr2 = arr.pop();
console.log('arr2', arr)

// push method
let arr3 = arr.push(13);
console.log('arr3', arr3, arr)

// shift method
let arr5 = arr.shift();
console.log('arr5', arr)

// unshift method
let arr4 = arr.unshift(20);
console.log('arr4', arr4, arr)

// element adding method
arr[3] = 31
console.log('arr', arr)

// delete method but not the most efficient
delete arr[1]
console.log('arr', arr)