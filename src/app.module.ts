import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 15432,
      username: 'admin',
      password: 'admin',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: false,
      keepConnectionAlive: true,
      entities: [__dirname + '/**/*.entity.{ts,js}'],
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
