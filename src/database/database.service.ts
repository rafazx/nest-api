import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { UserEntity } from '../model/user.entity';
import { FeedBackEntity } from '../model/feedBack.entity';

@Injectable()
export class DatabaseService { 
    async createConnection(): Promise<Sequelize> {
        const {DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;
        const sequelize = new Sequelize({
            dialect: 'mysql',
            host: DB_HOST,
            port: parseInt(DB_PORT),
            username: DB_USERNAME,
            password: DB_PASSWORD,
            database: DB_DATABASE,
          });

        sequelize.addModels([UserEntity, FeedBackEntity])
        await sequelize.sync();
        return sequelize;
    }
}
