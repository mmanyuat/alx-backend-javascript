import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range; // Additional attribute specific to EVCar
  }

  cloneCar() {
    // Return an instance of the parent class (Car) instead of EVCar
    return new Car(this._brand, this._motor, this._color);
  }
}
