import { CreateUserHandler } from './create-user.handler';

export const CommandHandlers = [CreateUserHandler];

export const UseCases = [...CommandHandlers];