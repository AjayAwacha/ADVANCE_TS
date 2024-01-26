export class Product2 {

    constructor(private _title: string, private _price: number) {
        this._title = _title;
        this._price = _price;
    }

    getDetails() {
        return [this._title, `$${this._price}`];
    }
}