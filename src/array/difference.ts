export function difference<T>(array: T[], exclude: T[]): T[] {
  return array.filter(el => !exclude.includes(el));
}
