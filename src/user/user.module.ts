import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { JwtStrategy } from './jwt.strategy';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [
        JwtModule.register({
            secret: 'secretKey',
            signOptions: { expiresIn: "1d" }
        }),
        TypeOrmModule.forFeature([User])
    ],
    controllers: [UserController],
    providers: [UserService, JwtStrategy]
})
export class UserModule {}
