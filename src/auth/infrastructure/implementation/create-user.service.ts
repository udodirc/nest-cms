import { CreateUserAwareInterface } from '../interfaces';
import { UsersInteractor } from '../../../users/users.interactor';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserService implements CreateUserAwareInterface {
  constructor(private readonly userInteractor: UsersInteractor) {}

  async createUser(email: string, password: string): Promise<void> {
    const hash = await bcrypt.hash(password, 6);

    this.userInteractor.createUser(email, hash);
  }
}