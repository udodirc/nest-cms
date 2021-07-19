import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CREATE_USER_SERVICE } from '../../../infrastructure/constants';
import { CreateUserAwareInterface } from 'src/auth/infrastructure/interfaces';
import { RegistrationCommand } from '../implementation';

@QueryHandler(RegistrationCommand)
export class RegistrationHandler
  implements IQueryHandler<RegistrationCommand>
{
  constructor(
    @Inject(CREATE_USER_SERVICE)
    private readonly createUserService: CreateUserAwareInterface,
  ) {}

  async execute(command: RegistrationCommand): Promise<any> {
    const { email, password } = command;

    this.createUserService.createUser(email, password);
  }
}