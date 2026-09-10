import "reflect-metadata";

import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { SwaggerModule } from "@nestjs/swagger";
import cookieParser from "cookie-parser";

import { AppModule } from "./app.module";
import { HttpExceptionResponseFilter } from "./common/filters/http-exception.filter";
import { swaggerConfig } from "./config/swagger.config";
import { ConfigKeys } from "./common/enum/config-keys.enum";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.use(cookieParser());
  app.setGlobalPrefix("api");
  app.enableCors({
    origin: config.get<string>(`${ConfigKeys.App}.frontendOrigin`, "http://localhost:3000"),
    credentials: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.useGlobalFilters(new HttpExceptionResponseFilter());

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("api/docs", app, swaggerDocument);

  await app.listen(config.get<number>(`${ConfigKeys.App}.port`, 4000));
}

void bootstrap();
