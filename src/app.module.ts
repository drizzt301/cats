import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import * as mongoose from 'mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGDB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true, --6.0 이상 기본세팅 error 발생
      //useFindAndModify: false, --6.0 이상 기본세팅 error 발생
    }),
    CatsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.MODE === 'dev' ? true : false;
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    mongoose.set('debug', this.isDev); //true - 개발시 몽구스 쿼리 표시됨
    // Mongoose: cats.createIndex({ email: 1 }, { unique: true, background: true }) ---이런거 계속 나옴 -- 불필요한쿼리 보내지 않았는지 확인
  }
}
