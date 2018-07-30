export type UserData = {
  id: number,
  username: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string,
}

interface User {
  user: UserData,
  getId(): number,
  getUsername(): string,
  validPassword(password: string): boolean,
  toObject(): UserData,
}

export default class UserModel implements User {

  user: UserData

  constructor(userData: UserData) {
    this.user = {
      id: userData.id,
      username: userData.username,
      email: userData.email,
      password: userData.password,
      firstName: userData.firstName,
      lastName: userData.lastName,
    }
    return this
  }

  getId() {
    return this.user.id
  }

  getUsername() {
    return this.user.username
  }

  validPassword(password: string) {
    return this.user.password === password
  }

  toObject() {
    return this.user
  }
}
