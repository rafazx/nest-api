
import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  constructor(
      private usersService: UserService,
      private jwtService: JwtService
      ) {}

  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this.usersService.findByLogin(login);
    if (user && user.password != pass) {
      throw new BadRequestException('Login ou senha incorretos');
    }
    return user;
  }

  async login(login: string, pass: string) {
    const user = await this.validateUser(login, pass);
    const payload = { userId: user.user_id };
    return {
      login: user.login,
      access_token: this.jwtService.sign(payload),
    };
  }
}