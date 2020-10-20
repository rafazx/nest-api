import { Body, Controller, forwardRef, Inject, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUser } from './decorator/get-user.decorator';
import { CreateUserDto } from './dto/createUserDto';
import { User } from './User';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        @Inject(forwardRef(() => AuthService)) private readonly authService: AuthService
    ) {
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    createUser(
        @Body() body: CreateUserDto
        ): Promise<User> {
        return this.userService.create(body)
    }

    @Post('/login')
    async login(
        @Body() body) {
        return this.authService.login(body.login, body.password);
    }
}
