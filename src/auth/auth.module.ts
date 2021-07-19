import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UseCases } from './usecases';
import { UsersModule } from '../users/users.module';
import { AuthCommandController } from './auth.command.controller';
import { UsersInteractor } from '../users/users.interactor';
import { AuthInteractor } from './auth.interactor';
import { Infrastructure } from './infrastructure';

@Module({
    imports: [UsersModule, CqrsModule],
    providers: [UsersInteractor, AuthInteractor, ...UseCases, ...Infrastructure],
    controllers: [AuthCommandController],
    exports: [AuthInteractor],
  })
  export class AuthModule {}