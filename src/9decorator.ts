// decorator is typescript feacture that allow us to add metadata information and
// modify existing behaviour of class, property, and method
// decorator is just an function which we can use using @ symbol

// function Logger(constructor: Function) {
//     console.log('logging...');
//     console.log(constructor);
// }

// if we want to pass and parameter
function Logger(param: string) {
    console.log('Logger normal function called');
    return function(constructor: Function) {
        console.log('Logger decorator called');
        console.log(param);
        console.log(constructor);
    }
}

// create more usable decorator like component in angular

function withTemplate(template: string, hookId: string) {
    console.log('withTemplate normal function called');
    return function(constructor: any) {
        console.log('withTemplate decorator called');
        let classData = new constructor();
        const appEle = document.getElementById(hookId);
        if (appEle) {
            appEle.innerHTML = template;
            const hEle = document.querySelector('h1');
            if (hEle) {
                hEle.innerText = classData.name;
            }
        }
    }
}

// we can use two or more decorator once and they execute from bottom to top order

@Logger('LOGGING...')
@withTemplate('<h1>Dynamic Content for decorator</h1>', 'app')
class Person {
    name = 'Decorator Test';

    constructor() {
        console.log('constructor is called.');
    }
}

const p1 = new Person();
console.log(p1);

// other place to where we can apply decorator

// decorator function parameter is depands on where we use function
// if we use function for property then decorator function accept two argument
// first one is target and secound one is property name
// always remamber decorator is called while defining
// ex. to call class decorator we don't need to create instance
// 1] property decorator
function Log(target: any, propertyName: string) {
    console.log('Property Decorator called');
    console.log(target, propertyName);
    console.log('----------------------------------------');
}

// 2] method decorator
function Log1(target: any, methName: string, descriptor: any) {
    console.log('Method decorator execute');
    console.log(target);
    console.log(methName);
    console.log(descriptor);
    console.log('----------------------------------------');
}

// 3] setter method decorator
function Log2(target: any, methName: string, descriptor: any) {
    console.log('setter Method decorator execute');
    console.log(target);
    console.log(methName);
    console.log(descriptor);
    console.log('----------------------------------------');
}

// 4] parameter decorator
function Log3(target: any, name: string, position: number) {
    console.log('argument decorator execute');
    console.log(target);
    console.log(name);
    console.log(position); // postion of argument
    console.log('----------------------------------------');
}

class Product {
    @Log
    title: string;
    private _price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log2
    set price(value: number) {
        if (value > 0) {
            this._price = value;
        } else {
            throw new Error('price not valid')
        }
    }

    @Log1
    getPriceWithTax(@Log3 tax: number) {
        return this._price * (1 + tax);
    }
}
