import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Role } from '../role.decorator';
import { RoleGuard } from '../role.guard';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    login(@Body() body:any){
        return  this.authService.login( body.username, body.password);
    }
    
    ///@Role('admin')
    @UseGuards(JwtGuard)
    @Get('enter')
    test(@Req() req:any){ 
        console.log(req.user)
        return {
            name:'Joao Pedro',
        
        }
    }
}
