function removeDupes(str) {
    let uniqueChars = ''; // Рядок для зберігання унікальних символів

    for (let i = 0; i < str.length; i++) {
        // Перевірка, чи символ вже знаходиться у рядку uniqueChars
        if (uniqueChars.indexOf(str[i]) === -1) {
            uniqueChars += str[i]; // Додаємо символ до унікальних, якщо він ще не існує там
        }
    }

    return uniqueChars;
}

console.log(removeDupes('abcd')); // -> 'abcd'
console.log(removeDupes('aabbccdd')); // -> 'abcd'
console.log(removeDupes('abcddbca')); // -> 'abcd'
console.log(removeDupes('abababcdcdcd')); // -> 'abcd'

// function removeDupes(str) {
//     let result = '';
//     let charSet = new Set(); // Використовуємо Set для визначення унікальних символів
//
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         if (!charSet.has(char)) {
//             // Якщо символ ще не був доданий до множини, то додаємо його до результату
//             result += char;
//             charSet.add(char); // Додаємо символ до множини
//         }
//     }
//
//     return result;
// }