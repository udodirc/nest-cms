import { Users } from "src/users/enitites/model";

export interface CreateUserAwareInterface {
    createUser(email: string, password: string): Users;
  }