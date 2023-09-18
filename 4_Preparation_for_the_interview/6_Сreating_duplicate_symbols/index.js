const accum = (string) => {

    console.log(
        string
        .toUpperCase()
        .split('')
        .map((el, i) =>`${el}${el.repeat(i).toLowerCase()}`).join('-')
    )
}

accum('abcd');
accum('cwAt');