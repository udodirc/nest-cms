import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UseCases } from './usecases';
import { UsersModule } from '../users/users.module';
import { AuthCommandController } from './auth.command.controller';
import { UsersInteractor } from '../users/users.interactor';
import { AuthInteractor } from './auth.interactor';
import { Infrastructure } from './infrastructure';
import { JwtModule } from '@nestjs/jwt';
import { AuthQueryController } from './auth.query.controllers';

@Module({
    imports: [
      UsersModule, 
      CqrsModule,
      JwtModule.register({
        secret: 'secret_key',
        signOptions: {
          expiresIn: '24h'
        }
      })
    ],
    providers: [UsersInteractor, AuthInteractor, ...UseCases, ...Infrastructure],
    controllers: [AuthCommandController, AuthQueryController],
    exports: [AuthInteractor],
  })
  export class AuthModule {}