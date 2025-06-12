import { Module } from '@nestjs/common';
import { PayementService } from './payement.service';
import { PayementController } from './payement.controller';

@Module({
  controllers: [PayementController],
  providers: [PayementService],
})
export class PayementModule {}
