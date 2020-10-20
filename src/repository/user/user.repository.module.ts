import { Module } from '@nestjs/common';
import { userEntityProviders } from '../../model/user.entity.provider';
import { UserRepoProvider } from './user.repository.provider';

@Module({
  providers: [
    UserRepoProvider,
    ...userEntityProviders],
  exports: [UserRepoProvider]
})
export class UserRepositoryModule {}
