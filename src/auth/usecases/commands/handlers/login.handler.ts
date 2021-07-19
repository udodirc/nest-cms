import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { JwtService } from '@nestjs/jwt';
import { LoginCommand } from '../implementation';

@QueryHandler(LoginCommand)
export class LoginHandler
  implements IQueryHandler<LoginCommand>
{
  constructor(
    private readonly jwtService: JwtService
  ) {}

  async execute(command: LoginCommand): Promise<any> {
    const { email, password } = command;

    return this.validateUser();
  }

  private async validateUser() {
    
  }
}