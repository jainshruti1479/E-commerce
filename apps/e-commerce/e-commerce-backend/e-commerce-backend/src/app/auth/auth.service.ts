import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(@InjectModel('users') private userModel :Model<User>, private jwtService:JwtService){}
    async signup(signupDto:User){
        const {username,email,password} = signupDto
        const hashedPassword = await bcrypt.hash(password,10) 
        const user = await this.userModel.create({
            username,
            email,
            password:hashedPassword
        })
        user.save()
        const token = this.jwtService.sign({id: user._id})
        return { token}
    }
}
