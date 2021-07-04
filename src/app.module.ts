import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
      UserModule, 
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'pass123',
        database: 'postgres',
        autoLoadEntities: true,
        synchronize: false,
        keepConnectionAlive: true,
        entities: [__dirname + '/**/*.entity.{ts,js}'],
        migrations: ['migration/*.js'],
        cli: {
            migrationsDir: 'migration'
        }
      }),
      ThrottlerModule.forRoot({
        ttl: 10,
        limit: 5,
      })
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    }
  ]
})
export class AppModule {}
