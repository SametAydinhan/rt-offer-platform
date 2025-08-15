import { PrismaService } from '../prisma/prisma.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(registerUserDto: RegisterUserDto): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(loginUserDto: LoginUserDto): Promise<{
        accessToken: string;
    }>;
}
