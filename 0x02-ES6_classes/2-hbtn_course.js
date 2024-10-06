export default class HolbertonClassroom {
    /**
     * @param {string} name - name of the classroom 
     * @param {number} length  - length of the classroom
     * @param {object} students  - students of the classroom
     */
    constructor(name, length, students) {
        this.name = name;
        this.length = length;
        this.students = students;
    }
    // get the name of the classroom
    get name() {
        return this._name;
    }

    // set the name of course
    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = value;
    }

    // get length of the classroom
    get length() {
        return this._length;
    }

    // set the length of the classroom
    set length(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Length must be a number');
        }
        this._length = value;
    }

    // get students of the classroom
    get students() {
        return this._students;
    }

    // set the students of the classroom
    set students(value) {
        if (typeof value !== 'object') {
            throw new TypeError('Students must be an array');
        }
        this._students = value;
    }
}

