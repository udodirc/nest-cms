import { IS_EXIST_USER } from '../constants';
import { IsExistUser } from './implementation';

export const Rules = [
    {
      provide: IS_EXIST_USER,
      useClass: IsExistUser,
    },
];

