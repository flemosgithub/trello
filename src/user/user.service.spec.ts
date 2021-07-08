import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UserService } from './user.service';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
const createMockRepository = <T = any>(): MockRepository<T> => ({
  create: jest.fn(),
  save: jest.fn(),
});

describe('UserService', () => {

  let service: UserService;
  let createUserRepository: MockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: Connection, useValue: {} },
        { provide: getRepositoryToken(User), useValue: createMockRepository() },
        { provide: JwtService, useValue: {} }
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    createUserRepository = module.get<MockRepository>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createAsync', () => {
    describe('when a user is created by kafka', () => {
      it('should return an array containing first and last name', async () => {

        const kafkaRecord = 'firstName:lastName';

        createUserRepository.create(kafkaRecord);

        const returnedValue = await service.createAsync(kafkaRecord);
        expect(returnedValue[1]).toEqual('lastName');
      })
    })
  });

});
