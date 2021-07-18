import { CREATE_USER_SERVICE } from './constants';
import { CreateUserService } from './implementation';

export const Infrastructure = [
  { provide: CREATE_USER_SERVICE, useClass: CreateUserService }
];