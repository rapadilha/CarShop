import * as sinon from 'sinon';
import chai from 'chai';
import { Request, Response } from 'express';
import CarService from '../../../services/carsService'
import CarModel from '../../../models/carModel'
import CarController from '../../../controllers/carController'
import { carMock, carMockWithId } from '../mocks/mockController';
const { expect } = chai;

describe('CarController', () => {
  const carModel = new CarModel()
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  const req = {} as Request; 
  const res = {} as Response;

  before(async () => {
    sinon.stub(carService, 'create').resolves(carMockWithId)
    sinon.stub(carService, 'read').resolves([carMockWithId])
    sinon.stub(carService, 'readOne').resolves(carMockWithId)
    sinon.stub(carService, 'update').resolves()
    sinon.stub(carService, 'delete').resolves()

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res); 
  });

  after(()=>{
    sinon.restore();
  })

  describe('CreateCar', () => {
    it('Create Success', async () => {
      req.body = carMock;

      await carController.create(req, res);

      const statusStub = res.status as sinon.SinonStub
      const jsonStub = res.json as sinon.SinonStub
      

      expect(statusStub.calledWith(201)).to.be.true;
      expect(jsonStub.calledWith(carMockWithId)).to.be.true;
    })
  })

  describe('ReadCars', async () => {
    it(' Read Success', async () => {
      await carController.read(req, res);

      const statusStub = res.status as sinon.SinonStub
      const jsonStub = res.json as sinon.SinonStub

      expect(statusStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledWith([carMockWithId])).to.be.true;
    })
  })

  describe('ReadOneCar', async () => {
    it(' Read Success', async () => {
      req.params = {id: carMockWithId._id}
      await carController.readOne(req, res);

      const statusStub = res.status as sinon.SinonStub
      const jsonStub = res.json as sinon.SinonStub

      expect(statusStub.calledWith(200)).to.be.true;
      expect(jsonStub.calledWith(carMockWithId)).to.be.true;
    })
  })
  

});