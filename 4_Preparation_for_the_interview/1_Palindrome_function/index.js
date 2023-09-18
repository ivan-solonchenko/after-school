//Слово поліндром - це слово, фраза або число, яке читається однаково зліва направо і справа наліво.
const isPalindrome = str =>
    str === str.split('').reverse().join('');

console.log(isPalindrome('тест')); //false
console.log(isPalindrome('шалаш')); //true
