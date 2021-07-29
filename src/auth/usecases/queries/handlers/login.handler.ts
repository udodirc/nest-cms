import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { LoginQuery } from '../implementation';
import { UserEmailInfo } from '../../dto';
import { GET_USER_BY_EMAIL_SERVICE } from 'src/auth/infrastructure/constants';
import { Inject } from '@nestjs/common';
import { GetUserByEmailAwareInterface } from 'src/auth/infrastructure/interfaces';

@QueryHandler(LoginQuery)
export class LoginHandler
  implements IQueryHandler<LoginQuery, UserEmailInfo>
{
  constructor(
    @Inject(GET_USER_BY_EMAIL_SERVICE)
    private readonly getUserByEmailService: GetUserByEmailAwareInterface,
  ) {}

    execute(query: LoginQuery): Promise<UserEmailInfo> {
      const { email } = query;
      return this.getUserByEmailService.getUser(email);
    }
}