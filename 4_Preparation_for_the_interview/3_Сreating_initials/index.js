const toInitials = fullName =>

    console.log(
        fullName
        .split(' ')
        .map(el => `${el.slice(0, 1).toUpperCase()}.`)
        .join('') || 'None'
    )

toInitials('Bill Gates'); //B.G.
toInitials('elon mask'); //E.M.
