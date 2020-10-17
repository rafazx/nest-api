import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import requireDir = require('require-dir');

@Injectable()
export class DatabaseService { 

    async createConnection(): Promise<void> {
        const sequelize = new Sequelize({
            dialect: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'desafio-nest',
          });
        sequelize.addModels([requireDir('../model/')])
        await sequelize.sync();
    }
}
