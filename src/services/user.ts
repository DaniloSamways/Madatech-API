import { database } from "../fakeDatabase";

interface user {
  id: number;
  name: string;
  cpf: string;
  birthDate: string;
  senha?: string;
}

export class UserService {
  public async getUserById(id: number) {
    const user: user | undefined = database.find((userDB) => {
      if (userDB.id === id) {
        return userDB
      }
    });

    if (user) {
      return user;
    }

    throw new Error("User not found.");
  }
}