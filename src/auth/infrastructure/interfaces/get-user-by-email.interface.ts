import { UserEmailInfo } from "../../usecases/dto";

export interface GetUserByEmailAwareInterface {
  getUser(email: string): Promise<UserEmailInfo>;
}