
import { UserEntity } from './user.entity';

export const userEntityProviders = [
  {
    provide: 'USER_ENTITY',
    useValue: UserEntity,
  },
];