import { UsersInteractor } from '../../../users/users.interactor';
import { GetUserByEmailAwareInterface } from '../interfaces/get-user-by-email.interface';
import { Injectable } from '@nestjs/common';
import { UserEmailInfo } from 'src/auth/usecases/dto';

@Injectable()
export class GetUserByEmailService implements GetUserByEmailAwareInterface {
  constructor(private readonly userInteractor: UsersInteractor) {}

  getUser(email: string): Promise<UserEmailInfo> {
    return this.userInteractor.findByEmail(email);
  }
}