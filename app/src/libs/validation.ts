import { z } from 'zod'
import { createZodDto, ZodValidationPipe } from 'nestjs-zod'

export const Validation = z

export const ValidationDto = createZodDto

// export function ValidationDto(schema: ZodSchema) {
//   return createZodDto(schema)
// }
export const ValidationPipe = ZodValidationPipe
