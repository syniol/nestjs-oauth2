import { NestFactory } from '@nestjs/core'
import { ZodValidationPipe } from 'nestjs-zod'
import { AppModule } from './app.module'

(async () => {
  const app = await NestFactory.create(AppModule)

  /**
   * This is to avoid having to import and instantiate ZodValidationPipe in each rout
   * e.g. @Body(new ZodValidationPipe(AuthTokenRequestDTO)) request: AuthTokenRequestDTO
   */
  app.useGlobalPipes(new ZodValidationPipe())

  await app.listen(process.env.PORT ?? 3000)
})()
