import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../users/usecases/commands/implementation';
import { Registration } from './usecases/dto';

@Injectable()
export class AuthInteractor {
  constructor(private readonly queryBus: QueryBus) {}

  async registration(email: string, password: string): Promise<Registration> {
    return this.queryBus.execute(new CreateUserCommand(email, password));
  }
}