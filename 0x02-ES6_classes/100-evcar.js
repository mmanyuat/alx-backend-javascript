import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent class constructor
    this._range = range; // Initialize the range attribute
  }

  // Override the cloneCar method
  cloneCar() {
    return new Car(); // Return an instance of Car
  }
}

export default EVCar;
