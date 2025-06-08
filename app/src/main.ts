import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    HealthModule,
    AuthModule,
  ],
})
class AppModule {}

(async () => {
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.PORT ?? 3000);
})();
