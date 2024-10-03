import Building from './5-building.js';

class SkyHighBuilding extends Building {
  // Constructor to initialize sqft and floors
  constructor(sqft, floors) {
    super(sqft); // Call the parent constructor to set sqft
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;
