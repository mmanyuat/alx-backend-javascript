class HolbertonClass {
  // Constructor to initialize size and location
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Cast class to Number: return the size
  valueOf() {
    return this._size;
  }

  // Cast class to String: return the location
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
