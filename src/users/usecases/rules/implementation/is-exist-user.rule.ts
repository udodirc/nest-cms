import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/data-access/pg';
import { Repository } from 'typeorm';
import { IsExistUserAwareInterface } from '../interfaces/is-exist-user.interface';


export class IsExistUser
  implements IsExistUserAwareInterface
{
  constructor(
    @InjectRepository(Users)
    private readonly repository: Repository<Users>,
  ) {}

  async check(email: string): Promise<boolean> {
    const user = await this.repository.find({ where: { email: email } });
    
    return (user.length > 0) ? true : false;
  }
}