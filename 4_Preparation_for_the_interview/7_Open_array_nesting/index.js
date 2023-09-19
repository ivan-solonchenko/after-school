function flatten(array) {
    let res = [];

    function recursiveFlatten(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                recursiveFlatten(arr[i]); // Рекурсивно обробляємо вкладений масив
            } else {
                res.push(arr[i]); // Додаємо елемент до результату
            }
        }
    }

    recursiveFlatten(array);
    return res;
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]
