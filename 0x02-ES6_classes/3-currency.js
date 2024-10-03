class Currency {
  // Constructor with code and name attributes
  constructor(code, name) {
    this.code = code; // Use the setter for validation
    this.name = name; // Use the setter for validation
  }

  // Getter and setter for code
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Method to return the full currency format: "name (code)"
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
