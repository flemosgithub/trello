import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {

    constructor (
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async findAll() {
        return this.userRepository.find();
    }

    async create(createUserDto: CreateUserDto) {
        const user = this.userRepository.create({
            ...createUserDto
        })
        return this.userRepository.save(user);
    }

    async createAsync(message: string) {
        const values = message.split(":");
        const createUserDto = new CreateUserDto();
        createUserDto.firstName = values[0];
        createUserDto.lastName = values[1];
        this.create(createUserDto);

        console.log(message);
    }



}
