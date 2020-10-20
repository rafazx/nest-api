import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { UserEntity } from '../../model/user.entity';
import { User } from '../../user/User'
import { IUserRepository } from '../../user/IUserRepository';

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(
        @Inject('USER_ENTITY') private readonly userModel: typeof UserEntity
    ){}

    async findById(userId: number): Promise<User> {
        return await this.userModel.findByPk(userId);
    }

    async create(user: User): Promise<User> {
        return await this.userModel.create(user);
    }
    
    async findByLogin(login: string): Promise<User> {
        const user = await this.userModel.findOne({
            where: {
                login,
            }
        });

        if(!user) { throw new BadRequestException('Login ou Senha Errados')}
        return user
    }
    
}
