import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller('user')
export class UserController {

    constructor (private readonly userService: UserService) {}

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @MessagePattern('trello-topic')
    createAsync(@Payload() message) {
        this.userService.createAsync(message.value);
    }

}
