import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
  .setTitle("API Manager")
  .setDescription("مدیریت و اجرای سرویس‌های REST")
  .setVersion("1.0")
  .addBearerAuth()
  .addTag("auth", "احراز هویت")
  .addTag("users", "کاربران")
  .addTag("rest-services", "سرویس‌های REST")
  .build();
