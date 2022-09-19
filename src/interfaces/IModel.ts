export interface IModel<T> {
  create(T: object): Promise<T>
  read(): Promise<T[]>
  readOne(props: string): Promise<T | null>
  update(props: string, T: object): Promise<T | null>
  delete(props: string): Promise<T | null>
}