import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { JwtService } from '@nestjs/jwt';
import { GET_USER_BY_EMAIL_SERVICE } from '../../../infrastructure/constants';
import { GetUserByEmailAwareInterface } from '../../../infrastructure/interfaces';
import { LoginCommand } from '../implementation';

@QueryHandler(LoginCommand)
export class LoginHandler
  implements IQueryHandler<LoginCommand>
{
  constructor(
    @Inject(GET_USER_BY_EMAIL_SERVICE)
    private readonly getUserByEmailService: GetUserByEmailAwareInterface,
    private readonly jwtService: JwtService
  ) {}

  async execute(command: LoginCommand): Promise<any> {
    const { email, password } = command;
    console.log('Work!');
       
    return null;
  }
}