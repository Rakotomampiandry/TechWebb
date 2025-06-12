import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  findAll(){
    return this.clientsService.findAll();
  }

  @Get("Max_cli")
  findMax(){
    return this.clientsService.max();
  }
}