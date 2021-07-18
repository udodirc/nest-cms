import { CreateUserAwareInterface } from '../interfaces';
import { UsersInteractor } from '../../../users/users.interactor';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserService implements CreateUserAwareInterface {
  constructor(private readonly userInteractor: UsersInteractor) {}

  createUser(email: string, password: string): void {
    this.userInteractor.createUser(email, password);
  }
}