import { NewCarInput } from './dto/new-car.input';
import { Car } from './entities/car';
import { CarsService } from './cars.service';
export declare class CarsResolver {
    private carsService;
    constructor(carsService: CarsService);
    cars(): Promise<Car[]>;
    getCars(transmission: string, gas?: string): Promise<Car[]>;
    getCar(id: string): Promise<Car | string>;
    addNewCar(newCarData: NewCarInput): Promise<Car>;
    deleteCar(carId: string): Promise<Car | string>;
}
