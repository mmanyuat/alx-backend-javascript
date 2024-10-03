class Airport {
  // Constructor to initialize name and code
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Override toString method to return the airport code
  toString() {
    return `[object ${this._code}]`;
  }
}

export default Airport;
