export interface CacheClientOperations {
  get<ReturnType>(key: string): Promise<ReturnType>
  set<ValueType>(key, value: ValueType): Promise<void>
}
