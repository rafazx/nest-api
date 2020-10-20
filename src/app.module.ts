import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { FeedBackModule } from './feedBack/feed-back.module';
import { FeedBackController } from './feedBack/feed-back.controller';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule, 
    DatabaseModule, 
    FeedBackModule, 
    AuthModule
  ],
  controllers: [
  ],
  providers: [AppService],
})
export class AppModule {}
