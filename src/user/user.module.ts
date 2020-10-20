import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepositoryModule } from '../repository/user/user.repository.module';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [
        UserRepositoryModule,
        forwardRef(() => AuthModule)
    ],
    controllers: [
        UserController
    ],
    providers: [
        UserService
    ],
    exports: [
        UserService
    ]
})

export class UserModule {}
