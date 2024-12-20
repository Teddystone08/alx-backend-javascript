export class ALXClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}
const class2019 = new ALXClass (2019, 'San Francisco');
const class2020 = new ALXClass (2020, 'San Francisco');

export class StudentALX {
  constructor(firstName, lastName, alxClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._alxClass = alxClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get alxClass() {
    return this._alxClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._alxClass.year} - ${this._alxClass.location}`;
  }
}
const student1 = new StudentAlx('Guillaume', 'Salva', class2020);
const student2 = new StudentAlx('John', 'Doe', class2020);
const student3 = new StudentAlx('Albert', 'Clinton', class2019);
const student4 = new StudentAlx('Donald', 'Bush', class2019);
const student5 = new StudentAlx('Jason', 'Sandler', class2019);

export default [student1, student2, student3, student4, student5];
