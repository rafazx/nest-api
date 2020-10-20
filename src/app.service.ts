import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
  constructor(
    private readonly databaseService: DatabaseService
    ) {
    this.databaseService.createConnection()
    .then(res => {
      console.log('Banco Conectado com Sucesso')
    })
    .catch(error => {
      console.error(`Erro ao Conectar com o Banco ${error}`)
    })
  }
  getHello(): string {
    return 'Server are Running';
  }
}
