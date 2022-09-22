export interface IModel<T> {
  create(obj: T): Promise<T>
  // read(): Promise<T[]>
  // readOne(props: string): Promise<T | null>
  // update(props: string, obj: T): Promise<T | null>
  // delete(props: string): Promise<T | null>
}