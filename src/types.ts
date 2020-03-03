export interface Mapper<T, M> {
  (el: T): M;
}
