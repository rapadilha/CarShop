import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './mongoModel';

const mongooseSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

export default class Car extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Car', mongooseSchema)) {
    super(model);
  }
}