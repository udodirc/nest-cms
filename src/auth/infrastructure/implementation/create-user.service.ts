import { CreateUserAwareInterface } from '../interfaces';
import { UsersInteractor } from '../../../users/users.interactor';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Users } from 'src/users/enitites/model';

@Injectable()
export class CreateUserService implements CreateUserAwareInterface {
  constructor(private readonly userInteractor: UsersInteractor) {}

  async createUser(email: string, password: string): Promise<any> {
    const hash = await bcrypt.hash(password, 6);

    return this.userInteractor.createUser(email, hash);
  }
}