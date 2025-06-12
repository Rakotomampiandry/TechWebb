import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ProduitsModule } from './produits/produits.module';
import { PaniersModule } from './paniers/paniers.module';
import { ClientsModule } from './clients/clients.module';
import { PayementModule } from './payement/payement.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>({
        type: "postgres",
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        synchronize: true,
      })
    }),
    ProduitsModule,
    PaniersModule,
    ClientsModule,
    PayementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}