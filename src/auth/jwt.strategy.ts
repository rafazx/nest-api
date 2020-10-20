import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../user/User';
import { UserService } from '../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  
  constructor(
    private readonly userService: UserService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'valarMorghulis',
    });
  }

  async validate(payload: any): Promise<User> {
    const { userId } = payload;
    const user = await this.userService.findById(userId);
    if(!user) { 
      throw new UnauthorizedException();
    }
    return user;
  }
}