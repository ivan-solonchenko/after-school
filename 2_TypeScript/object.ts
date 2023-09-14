type TypeUser = {
    name:string
    age:number
}

type TypeAddress = {
    city:string
    country:string
}

const user:TypeUser = {
    name: 'Ivan',
    age: 26
}

const address:TypeAddress = {
    city:'Odesa',
    country:'Ukraine'
}

let common: TypeUser & TypeAddress

common = {
    ...user,
    ...address
}

console.log(common)