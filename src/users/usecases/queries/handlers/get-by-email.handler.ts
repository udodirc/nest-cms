import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetByEmailQuery } from '../implementation';
import { UserEmailInfo } from '../../dto';
import { Users } from 'src/users/data-access/pg';


@QueryHandler(GetByEmailQuery)
export class GetByEmailHandler
  implements IQueryHandler<GetByEmailQuery, UserEmailInfo>
{
  constructor(
    @InjectRepository(Users)
    private readonly repository: Repository<Users>,
  ) {}

  execute(query: GetByEmailQuery): Promise<UserEmailInfo> {
    const { email } = query;
    return this.repository.findOneOrFail({
      where: { email: email },
    });
  }
}
