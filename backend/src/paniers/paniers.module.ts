import { Module } from '@nestjs/common';
import { PaniersService } from './paniers.service';
import { PaniersController } from './paniers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Panier } from './entities/panier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Panier])],
  controllers: [PaniersController],
  providers: [PaniersService],
})
export class PaniersModule {}
