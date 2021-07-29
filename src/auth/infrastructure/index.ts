import { CREATE_USER_SERVICE } from './constants';
import { CreateUserService } from './implementation';
import { GET_USER_BY_EMAIL_SERVICE } from './constants';
import { GetUserByEmailService } from './implementation';

export const Infrastructure = [
  { provide: CREATE_USER_SERVICE, useClass: CreateUserService },
  { provide: GET_USER_BY_EMAIL_SERVICE, useClass: GetUserByEmailService }
];