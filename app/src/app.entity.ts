import { UUID } from 'crypto'

export abstract class AppEntity {
  public readonly id: number
  public readonly internalId: UUID
  public readonly createdDate: Date
  public readonly updatedDate: Date
}
