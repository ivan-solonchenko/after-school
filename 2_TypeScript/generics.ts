function identity<T>(args: T):T{
    return args;
}

let result = identity<string>("Hello, TypeScript!") // result має тип string
let result2 = identity<number>(5) // result має тип number


//стрілкова функція
const identity1 = <T>(args:T):T => {
    return args
}

identity1<number>(5);
identity1<string>("Hello, TypeScript!")

//класи
class Chanel<T> {
    private name: T

    constructor(name: T ) {
        this.name = name
    }

    getName():T {
        return this.name
    }
}

new Chanel<string>('RED Group')
new Chanel<number>(1)

//інтерфейси
interface IPair<K, V>  {
    key: K
    value: V
}

const pair1: IPair<string, number> = {
    key: 'string',
    val: 1,
}

type TypeLength = {
    length: number
}

function getNameLength<T extends TypeLength>(entity: T): number {
    return entity.length
}

getNameLength('hello')
getNameLength([0, 1, 2])