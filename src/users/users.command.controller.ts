import {
  Param,
  Controller,
  Post,
  BadRequestException,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsersInteractor } from './users.interactor';

@Controller('users')
@ApiTags('users')
@ApiBearerAuth()
export class UsersCommandController {
  constructor(private readonly interactor: UsersInteractor) {}

  @Post()
  @ApiOperation({
    summary:
      'Creation of user',
  })
  @ApiResponse({
    status: 201,
    description: 'User is created',
  })
  @ApiBadRequestResponse({
    description: 'User is not created',
  })
  async createUser(@Param('email') email: string, @Param('password') password: string): Promise<any> 
  {
    try {
      this.interactor.createUser(email, password);
    } catch (error) {
      throw new BadRequestException('This expeditor is not exist!');
    }
  }
}