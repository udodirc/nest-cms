import { BadRequestException } from '@nestjs/common/exceptions';
import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../../../data-access/pg';
import { IS_EXIST_USER } from '../../constants';
import { CreateUser } from '../../dto';
import { IsExistUserAwareInterface } from '../../rules/interfaces/is-exist-user.interface';
import { CreateUserCommand } from '../implementation';

@QueryHandler(CreateUserCommand)
export class CreateUserHandler
  implements IQueryHandler<CreateUserCommand, CreateUser>
{
  constructor(
    @InjectRepository(Users)
    private readonly repository: Repository<Users>,
    @Inject(IS_EXIST_USER)
    private readonly rule: IsExistUserAwareInterface,
  ) {}

  async execute(command: CreateUserCommand): Promise<any> {
    const { email, password } = command;
    const createdAt = Date.now();
    const updatedAt = Date.now();
    const checkUser = await this.rule.check(email);
    
    if (checkUser) {
      throw new BadRequestException('This user is exist!');
    }

    return this.repository.save({ email, password, createdAt, updatedAt });
  }
}