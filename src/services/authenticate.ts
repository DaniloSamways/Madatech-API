import jsonwebtoken from "jsonwebtoken";
import { database } from "../fakeDatabase";

export class AuthenticateService {
  public async authenticate(user: string, password: string) {
    // Criaria também um Repository para fazer requisições ao banco,
    // mas nesse caso, criei um banco de dados fake para simular.

    const query = database.find((userDB) => {
      if (userDB.name === user && userDB.senha === password) {
        return userDB;
      }
    })

    if (query) {
      const { id, cpf, birthDate, name } = query;
      const expiresIn = '1h'; // 1 hora

      const tokenJWT = jsonwebtoken.sign({ id, cpf, birthDate, name }, process.env.TOKEN_SECRET!, { expiresIn })

      return { tokenJWT, expiresIn };
    }

    throw new Error("User or password incorrect.");
  };
}