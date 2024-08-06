// LocalStorage:
// Setting data in localStorage
localStorage.setItem('car1', 'BMW');

// Getting data from localStorage
const BMW = localStorage.getItem('car1');
console.log('localStorage car1:', BMW);

// SessionStorage:
// Setting data in sessionStorage
sessionStorage.setItem('car2', 'Thor');

// Getting data from sessionStorage
const Thor = sessionStorage.getItem('car2');
console.log('sessionStorage car2:',Thor );

// Removing a specific item from sessionStorage
sessionStorage.removeItem('car2');
const removedThor = sessionStorage.getItem('car2');
console.log('sessionStorage after removal car2:', removedThor); // Should be null

// JSON Storage
const obj = { name: 'sindhu', age: 22 };
localStorage.setItem('user', JSON.stringify(obj));
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log('localStorage user:', storedUser);

// Clearing storage
localStorage.clear();
const clearedLocalStorage = localStorage.getItem('user');
console.log('localStorage after clearing:', clearedLocalStorage); // Should be null

sessionStorage.clear();
const clearedSessionStorage = sessionStorage.getItem('user');
console.log('sessionStorage after clearing:', clearedSessionStorage); // Should be null