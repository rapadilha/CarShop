import { Model, isValidObjectId, UpdateQuery } from 'mongoose';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../middlewares/errorCatalog';

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
  public async readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);
    const car = this._model.findOne({ _id });

    return car;
  }
  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error(ErrorTypes.InvalidMongoId);
    const carUpdate = this._model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );

    if (!carUpdate) return null;

    return carUpdate;
  }
  // delete(props: string): Promise<T | null> {
  //   throw new Error('Method not implemented.');
  // }
}