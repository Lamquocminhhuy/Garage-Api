import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  const configService = app.get(ConfigService);
 

 
  const swaggerConfig = new DocumentBuilder()
    .setTitle('APIs with NestJS')
    .setDescription('Flight Booking APIs')
    .setVersion('1.0')
    .build();
 
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
 
  const port = configService.get('PORT') ?? 3000;
 
  await app.listen(port);
}
bootstrap();