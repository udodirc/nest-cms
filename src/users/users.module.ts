import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { DataAccess } from './data-access';
import { UsersInteractor } from './users.interactor';
import { UseCases } from './usecases/commands/handlers';
import { UsersCommandController } from './users.command.controller';

@Module({
    imports: [UsersModule, CqrsModule, TypeOrmModule.forFeature(DataAccess)],
    providers: [...UseCases, UsersInteractor],
    controllers: [UsersCommandController],
  })
  export class UsersModule {}