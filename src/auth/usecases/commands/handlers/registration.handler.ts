import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { JwtService } from '@nestjs/jwt';
import { CREATE_USER_SERVICE } from '../../../infrastructure/constants';
import { CreateUserAwareInterface } from '../../../infrastructure/interfaces';
import { RegistrationCommand } from '../implementation';

@QueryHandler(RegistrationCommand)
export class RegistrationHandler
  implements IQueryHandler<RegistrationCommand>
{
  constructor(
    @Inject(CREATE_USER_SERVICE)
    private readonly createUserService: CreateUserAwareInterface,
    private readonly jwtService: JwtService
  ) {}

  async execute(command: RegistrationCommand): Promise<any> {
    const { email, password } = command;
    const user = await this.createUserService.createUser(email, password);

    return this.generateToken(user);
  }

  private async generateToken(user) {
    const token = {email: user.email, id: user.id}

    return {
      token: this.jwtService.sign(token)
    }
  }
}