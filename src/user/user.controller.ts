import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { MessagePattern, Payload } from "@nestjs/microservices";
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('Users')
@Controller('user')
export class UserController {

    constructor (private readonly userService: UserService) {}

    @ApiResponse({ status: 201, description: 'User has been successfully created.'})
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @ApiResponse({ status: 201, description: 'JWT Token has been successfully created.'})
    @Post('login')
    login(@Body() loginUserDto: LoginUserDto) {
        return this.userService.login(loginUserDto.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @MessagePattern('trello-topic')
    createAsync(@Payload() message) {
        this.userService.createAsync(message.value);
    }

}
