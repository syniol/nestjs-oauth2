import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from './libs/validation'

;(async () => {
  const app = await NestFactory.create(AppModule)

  /**
   * This is to avoid having to import and instantiate ValidationPipe in each rout
   * e.g. @Body(new ValidationPipe(AuthTokenRequestDTO)) request: AuthTokenRequestDTO
   */
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.PORT ?? 3000)
})()
