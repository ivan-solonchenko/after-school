enum EnumRoles {
    ADMIN,GUEST, USER
}

interface IUser {
    role: EnumRoles
}

const user:IUser = {
    role:EnumRoles.ADMIN
}