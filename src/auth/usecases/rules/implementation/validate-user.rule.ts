import { Inject, NotFoundException } from '@nestjs/common';
import { GET_USER_BY_EMAIL_SERVICE } from 'src/auth/infrastructure/constants';
import { GetUserByEmailAwareInterface } from 'src/auth/infrastructure/interfaces';
import { ValidateUserAwareInterface } from '../interfaces/validate-user.interface';


export class ValidateUser
  implements ValidateUserAwareInterface
{
  constructor(
    @Inject(GET_USER_BY_EMAIL_SERVICE)
    private readonly getUserByEmailService: GetUserByEmailAwareInterface,
  ) {}

  async check(email: string): Promise<any> {
    try {
        return await this.getUserByEmailService.getUser(email);
      } catch (error) {
        throw new NotFoundException('User is not found');
    }
  }
}