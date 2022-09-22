import { Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';

export default class MongoModel<T> implements IModel<T> {
  private _model:Model<T>;

  constructor(model:Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    const created = await this._model.create({ ...obj });

    return created;
  }
  public async read(): Promise<T[]> {
    const all = this._model.find();
    return all;
  }
  // readOne(props: string): Promise<T | null> {
  //   if (!isValidObjectId(props)) throw new Error('Method readOne not implemented.');
  //   this._model.findOne(props);
  // }
  // update(props: string, T: object): Promise<T | null> {
  //   throw new Error('Method not implemented.');
  // }
  // delete(props: string): Promise<T | null> {
  //   throw new Error('Method not implemented.');
  // }
}