import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { IUserRepository } from './IUserRepository';
import { User } from './User';

const UserRepo = () => Inject('UserRepository');
@Injectable()
export class UserService {
    constructor(
        @UserRepo() private readonly userRepository: IUserRepository
        ) {}

    public async findByLogin(login: string): Promise<User> {
        return this.userRepository.findByLogin(login);
    }

    
    public async findById(userId: number): Promise<User> {
        return this.userRepository.findById(userId);
    }

    public async create(user: CreateUserDto) {
        return this.userRepository.create(user);
    }

}
