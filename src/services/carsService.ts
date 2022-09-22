import { ICar, CarSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../middlewares/errorCatalog';

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

  async read(): Promise<ICar[]> {
    const allCars = await this._cars.read();

    return allCars;
  }

  async readOne(_id: string): Promise<ICar> {
    const car = await this._cars.readOne(_id);
    if (!car) throw new Error(ErrorTypes.EntityNotFound);

    return car;
  }

  async update(id: string, obj:Partial<ICar>): Promise<ICar & { id: string } | null> {
    const parsed = CarSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error;
    }

    console.log(parsed.data);
    
    const carUpdate = await this._cars.update(id, parsed.data);

    if (!carUpdate) throw Error(ErrorTypes.EntityNotFound);

    return carUpdate as ICar & { id: string };
  }
}