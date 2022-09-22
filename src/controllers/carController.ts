import { Request, Response } from 'express';
import CarsService from '../services/carsService';

export default class CarController {
  constructor(private _service: CarsService) {}
  public async create(req: Request, res: Response) {
    const car = req.body;

    const result = await this._service.create(car);

    res.status(201).json(result);
  }
}