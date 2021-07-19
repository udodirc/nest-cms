import { ApiProperty } from '@nestjs/swagger';

export class UserEmailInfo {
  @ApiProperty({ example: 'user@test.io', description: 'User email' })
  email: string;
}