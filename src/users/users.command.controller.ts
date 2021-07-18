import {
  Param,
  Controller,
  Post,
  BadRequestException,
  Body,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUser } from './usecases/dto';
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
  async createUser( @Body() createUser: CreateUser): Promise<any> 
  {
    const { email, password } = createUser;

    try {
      this.interactor.createUser(email, password);
    } catch (error) {
      throw new BadRequestException('This expeditor is not exist!');
    }
  }
}