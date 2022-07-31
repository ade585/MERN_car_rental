import { NewCarInput } from './dto/new-car.input';
import { Repository } from 'typeorm';
import { Car } from './entities/car';
export declare class CarsService {
    private carRepository;
    constructor(carRepository: Repository<Car>);
    getAllCars(): Promise<Car[]>;
    getCars(transmission: string, gas?: string): Promise<Car[]>;
    getCar(id: string): Promise<Car | string>;
    addCar(newCarData: NewCarInput): Promise<Car>;
    deleteCar(carId: string): Promise<Car | string>;
}
