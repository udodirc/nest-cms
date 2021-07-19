import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './usecases';
import { CreateUser, UserEmailInfo } from './usecases/dto';
import { GetByEmailQuery } from './usecases';


@Injectable()
export class UsersInteractor {
  constructor(private readonly queryBus: QueryBus) {}

  async createUser(email: string, password: string): Promise<CreateUser> {
    return this.queryBus.execute(new CreateUserCommand(email, password));
  }

  async findByEmail(email: string): Promise<UserEmailInfo> {
    return this.queryBus.execute(new GetByEmailQuery(email));
  }
}