import { Controller, NotFoundException } from '@nestjs/common';
import { UsersInteractor } from './users.interactor';

@Controller('user')
export class UsersQueryController {
  constructor(private readonly interactor: UsersInteractor) {}

  async findByEmail(email: string): Promise<any> {
    try {
      return await this.interactor.findByEmail(email);
    } catch (error) {
      throw new NotFoundException('User is not found');
    }
  }
}
