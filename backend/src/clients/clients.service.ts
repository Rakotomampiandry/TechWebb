import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientrepository:
    Repository<Client>){}

  //ajout client
  async create(createClientDto: CreateClientDto) {
    const client = this.clientrepository.create(createClientDto)
    return await this.clientrepository.save(client);
  }

  //affichage client
  async findAll(){
    return await this.clientrepository.find();
  }

  //max client
  async max(): Promise<number> {
    const max = await this.clientrepository
      .createQueryBuilder('clients')
      .select('MAX(clients.id_cli)', 'max')
      .getRawOne();
    
    return max ? max.max : 0;
  }
}
