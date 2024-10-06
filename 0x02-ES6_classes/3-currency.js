 /**
     * 
     * @param {string} code - code of the currency
     * @param {string} name - name of the currency
     */
    
 export default class Currency {
   
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }

    // get code of the currency
    get code() {
        return this._code;
    }

    // set code of the currency
    set code(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Code must be a string');
        }
        this._code = value;
    }

    // get name of the currency
    get name() {
        return this._name;
    }

    // set name of the currency
    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = value;
    }

    // display the currency
    displayFullCurrency() {
        return `${this.name} (${this.code})`;
    }
}