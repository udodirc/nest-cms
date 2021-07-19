import {
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
import { AuthInteractor } from './auth.interactor';
import { Registration } from './usecases/dto';
  
  @Controller('auth')
  @ApiTags('Auth')
  @ApiBearerAuth()
  export class AuthCommandController {
    constructor(private readonly interactor: AuthInteractor) {}
  
    @Post('/registration')
    @ApiOperation({
      summary:
        'User registration',
    })
    @ApiResponse({
      status: 201,
      description: 'User is registered',
    })
    @ApiBadRequestResponse({
      description: 'User is not registered',
    })
    async registration( @Body() registration: Registration): Promise<any> 
    {
      const { email, password } = registration;
  
      try {
        return this.interactor.registration(email, password);
      } catch (error) {
        throw new BadRequestException('Registration is fail!');
      }
    }

    @Post('/login')
    @ApiOperation({
      summary:
        'User login',
    })
    @ApiResponse({
      status: 201,
      description: 'User is logged',
    })
    @ApiBadRequestResponse({
      description: 'User is not logged',
    })
    async login( @Body() registration: Registration): Promise<any> 
    {
      
    }
  }