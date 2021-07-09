import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  const user = {
      'user': 'fabio',
      'pass': '123456'
  };

  let authorizationKey: string;

  it('/ (POST)', () => {
    return request(app.getHttpServer())
      .post('/user/login')
      .send(user)
      .expect(HttpStatus.CREATED)
      .then(({ body }) => {
          authorizationKey = body.accessToken
      } )
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/user')
      .set('Authorization', 'Bearer ' + authorizationKey)
      .expect(200);
  });

});
