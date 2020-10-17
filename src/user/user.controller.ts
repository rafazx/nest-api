import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    
    @Post()
    createUser(): String {
        return 'Usuário criado com sucesso'
    }

    @Get()
    getUser(): String {
        return 'Funcionou'
    }
}
