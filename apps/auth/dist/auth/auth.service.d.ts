import { PrismaService } from '../prisma/prisma.service';
import { RegisterUserDto } from './dto/register-user.dto';
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    register(registerUserDto: RegisterUserDto): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
