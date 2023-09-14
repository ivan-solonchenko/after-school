interface IUserAge {
    age:number
}

interface IUser extends IUserAge {
    name: string
    email: string
}

type  TypePerson = {
    age:number
}

type  TypeUser = {
    name: string
    email: string
} & TypePerson

const user:IUser = {
    name: 'Ivan'
    email: 'user@gmail.com'
    age:26
}