export type User = {
    id: number
    username: string
    email: string
    image: string
}

export type UserAddressType = {
    address: string
    city: string
    coordinates: {
        lat: number
        lng: number
    }
    country: string
    postalCode: string
    state: string
    stateCode: string
}

export type UserBankType = {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
}

export type UserCompanyType = {
    address: UserAddressType
    department: string
    name: string
    title: string
}

export type UserCryptoType = {
    coin: string
    network: string
    wallet: string
}

export type UserHairType = {
    color: string
    type: string
}

export type UserType = {
    address: UserAddressType
    age: number
    bank: UserBankType
    birthDate: string
    bloodGroup: string
    company: UserCompanyType
    crypto: UserCryptoType
    ein: string
    email: string
    eyeColor: string
    firstName: string
    gender: string
    hair: UserHairType
    height: number
    id: string
    image: string
    ip: string
    lastName: string
    macAddress: string
    maidenName: string
    password: string
    phone: string
    role: string
    ssn: string
    university: string
    userAgent: string
    username: string
    weight: number
}