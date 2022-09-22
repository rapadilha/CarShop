import { Request, Response } from 'express';
import CarsService from '../services/carsService';

export default class CarController {
  constructor(private _service: CarsService) {}
  public async create(req: Request, res: Response) {
    const car = req.body;

    const result = await this._service.create(car);

    res.status(201).json(result);
  }

  public async read(req: Request, res: Response) {
    const result = await this._service.read();

    res.status(200).json(result);
  }

  public async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const result = await this._service.readOne(id);

    res.status(200).json(result);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const result = await this._service.update(id, req.body);

    res.status(200).json(result);
  }
}