import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../../../data-access/pg';
import { CreateUser } from '../../dto';
import { CreateUserCommand } from '../implementation';

@QueryHandler(CreateUserCommand)
export class CreateUserHandler
  implements IQueryHandler<CreateUserCommand, CreateUser>
{
  constructor(
    @InjectRepository(Users)
    private readonly repository: Repository<Users>,
  ) {}

  async execute(command: CreateUserCommand): Promise<any> {
    const { email, password } = command;

    this.repository.save({ email, password });
  }
}