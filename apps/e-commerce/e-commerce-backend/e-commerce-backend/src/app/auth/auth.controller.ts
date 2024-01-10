import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './schemas/user.schema';

@Controller('auth')
export class AuthController {
    constructor(private Auth:AuthService){}
    @Post('/signup')
    signup(@Body() signupDto:User) {
        return this.Auth.signup(signupDto)
    }
}
