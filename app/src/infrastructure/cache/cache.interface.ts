export interface CacheStorageOption {
  // Time-to-Live in Seconds
  ttl: number
}

export interface CacheClientOperations {
  get<ReturnType>(key: string): Promise<ReturnType>
  set<ValueType>(key, value: ValueType, opt?: CacheStorageOption): Promise<void>
}
