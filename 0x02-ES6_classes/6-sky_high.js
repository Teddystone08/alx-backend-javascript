mport Building from './5-building';

export default class SkyHighBuilding extend Building 
 constructor(sqft, floors) {
  super(sqft);
  this._floors = floors;
 }

get sqft() {
 return this._sqrt;
}

gey floor() {
 return this._floors;
}

evavcuationWarningMessage() {
 return `Evacuate slowely  the ${this.floors} floors`;
}

