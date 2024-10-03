const _clone = Symbol('clone');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Private cloning method
  [_clone]() {
    return new this.constructor();
  }

  // Public method that uses the private clone method
  cloneCar() {
    return this[_clone]();
  }
}

export default Car;
