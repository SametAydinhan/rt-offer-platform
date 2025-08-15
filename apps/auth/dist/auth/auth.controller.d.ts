import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerUserDto: RegisterUserDto): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
