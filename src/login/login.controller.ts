import { Controller, Get } from '@nestjs/common';

@Controller('login')
export class LoginController {
    @Get()
    getLogin() : String {
        return 'Logou'
    }
}
