import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { RegistrationCommand } from './usecases/commands/implementation';
import { Registration } from './usecases/dto';

@Injectable()
export class AuthInteractor {
  constructor(private readonly queryBus: QueryBus) {}

  async registration(email: string, password: string): Promise<Registration> {
    return this.queryBus.execute(new RegistrationCommand(email, password));
  }

  async login(email: string, password: string): Promise<Registration> {
    return this.queryBus.execute(new RegistrationCommand(email, password));
  }
}