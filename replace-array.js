const arr = ['a', 'b', 'c'];

const index = arr.indexOf('a'); // 👉️  0

arr.splice(index, 0, 'z');

console.log(arr); // 👉️ [ 'z', 'b', 'c' ]