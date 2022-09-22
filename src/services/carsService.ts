import { ICar, CarSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

export default class CarsService {
  constructor(private _cars:IModel<ICar>) {}

  async create(obj: ICar): Promise<ICar> {
    const parsed = CarSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }
    
    const created = await this._cars.create(obj);

    return created;
  }
}