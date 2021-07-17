import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../users/usecases/commands/implementation';
import { CreateUser } from '../users/usecases/dto';

@Injectable()
export class UsersInteractor {
  constructor(private readonly queryBus: QueryBus) {}

  async createUser(email: string, password: string): Promise<CreateUser> {
    return this.queryBus.execute(new CreateUserCommand(email, password));
  }
}