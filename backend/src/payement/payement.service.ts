import { Injectable } from '@nestjs/common';
import { CreatePayementDto } from './dto/create-payement.dto';
import { UpdatePayementDto } from './dto/update-payement.dto';

@Injectable()
export class PayementService {
  create(createPayementDto: CreatePayementDto) {
    return 'This action adds a new payement';
  }

  findAll() {
    return `This action returns all payement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payement`;
  }

  update(id: number, updatePayementDto: UpdatePayementDto) {
    return `This action updates a #${id} payement`;
  }

  remove(id: number) {
    return `This action removes a #${id} payement`;
  }
}
