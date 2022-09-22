import { Router } from 'express';
import Car from '../models/carModel';
import CarsService from '../services/carsService';
import CarsController from '../controllers/carController';

const carRouter = Router();

const cars = new Car();
const carsService = new CarsService(cars);
const carsController = new CarsController(carsService);

carRouter.post('/', (req, res) => carsController.create(req, res));
carRouter.get('/', (req, res) => carsController.read(req, res));
carRouter.get('/:id', (req, res) => carsController.readOne(req, res));

export default carRouter;