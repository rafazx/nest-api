import { CreateUserDto } from "./dto/createUserDto";
import { User } from "./User";

export interface IUserRepository {
    findByLogin(login: string): Promise<User>;
    create(user: CreateUserDto): Promise<User>;
    findById(userId: number): Promise<User>;
}