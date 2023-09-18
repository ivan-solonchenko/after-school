const sumDigits = (number) => {
    result =
        Math.abs(number)
        .toString()
        .split('')
        .reduce((sum, cur) => +sum + +cur, 0);

    console.log(result)
}

sumDigits(99); //18
sumDigits(-32); //5