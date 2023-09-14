type TypeMyFunctionReturn = {
    name:string
}

function myFunction (name:string):TypeMyFunctionReturn {
    return {name}
}

type myFunctionNewFn = (name:string) => TypeMyFunctionReturn
const myFunctionNew: myFunctionNewFn = name => {
    return {name}
}

const getNumbers = (...numbers: number[] => {
    return numbers
})

//функціональне перевантаження
function getCar(name: string): string
function getCar(name: string, price?: number): string

function getCar(name: string, price?: number): string {
    return price ? `Назва ${name}, ціна ${price}` : `Назва ${name}`
}

const car1 = getCar('bmw')
const car2 = gerCar('bmv', 100000)
// const car3 = gerCar('bmv', 100000, 'sdfsdf') працювати не буде, оскільки задано 1 або 2 параметри