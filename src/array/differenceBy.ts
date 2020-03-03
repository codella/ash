import type { Mapper } from '../types';

const identity = (el: any) => el;

export function differenceBy<T, M>(
  array: T[],
  exclude: T[],
  iteratee: Mapper<T, M> = identity
): T[] {
  const mappedExcluded = exclude.map(iteratee);
  return array.filter(el => !mappedExcluded.includes(iteratee(el)));
}
