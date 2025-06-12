// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { join } from 'path';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.enableCors({origin:'http://localhost:3000',})

//   //upload photo
//   app.useStaticAssets(join(__dirname, '..', 'uploads'), {
//     prefix: '/uploads/',
//   });

//   await app.listen(3001);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Expose /uploads pour afficher les images
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });

  await app.listen(3001);
}
bootstrap();
