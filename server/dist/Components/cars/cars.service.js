"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const car_1 = require("./entities/car");
let CarsService = class CarsService {
    constructor(carRepository) {
        this.carRepository = carRepository;
    }
    async getAllCars() {
        const cars = await this.carRepository.find();
        if (cars)
            return cars;
        else
            throw new common_1.InternalServerErrorException();
    }
    async getCars(transmission, gas) {
        const cars = await this.carRepository
            .findBy({ transmission, gas })
            .catch((err) => {
            throw new common_1.InternalServerErrorException();
        });
        if (!cars)
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'Car does not exists.',
            }, common_1.HttpStatus.NOT_FOUND);
        return cars;
    }
    async getCar(id) {
        const car = await this.carRepository
            .findOneBy({ id: id })
            .catch((err) => {
            throw new common_1.InternalServerErrorException();
        });
        if (!car)
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'Car does not exists.',
            }, common_1.HttpStatus.NOT_FOUND);
        return car;
    }
    async addCar(newCarData) {
        const newCar = this.carRepository.create(newCarData);
        await this.carRepository.save(newCar).catch((err) => {
            new common_1.InternalServerErrorException();
        });
        return newCar;
    }
    async deleteCar(carId) {
        const car = await this.carRepository.findOneBy({ id: carId });
        if (!car)
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error: 'Car does not exists.',
            }, common_1.HttpStatus.NOT_FOUND);
        await this.carRepository.delete({ id: carId }).catch((err) => {
            throw new common_1.InternalServerErrorException();
        });
        return car;
    }
};
CarsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(car_1.Car)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CarsService);
exports.CarsService = CarsService;
//# sourceMappingURL=cars.service.js.map