import { NestFactory } from '@nestjs/core'
import { ZodValidationPipe } from 'nestjs-zod'
import { AppModule } from './app.module'

(async () => {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ZodValidationPipe())

  await app.listen(process.env.PORT ?? 3000)
})()
