const usersArray = [
]

class Database {
    constructor() {
        this._users = usersArray
    }
    getUsers() {
        return this._users
    }
    findOne(nameProperty, property) {
        const candidate = this._users.find((user) => user[nameProperty] === property)
        return candidate
    }
    create(user) {
        this._users.push(user)
        return user
    }
    addToken(id, token) {
        this._users = this._users.map(user => user.id === id ? {...user, refreshToken: token} : user)
        return token
    }
}

module.exports = new Database()