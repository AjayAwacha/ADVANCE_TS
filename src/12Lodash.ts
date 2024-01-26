// import _ from 'lodash';
// declare var globalVariable: string;
import { Product2 } from './testClass.js';



// console.log(_.shuffle([1, 2, 3]));
// console.log(globalVariable);

const p1 = new Product2('mobile', 4.0);
console.log(p1.getDetails());


const dataFromServer = [
    {_title: 'Desktop1', _price: 10},
    {_title: 'Desktop2', _price: 20},
    {_title: 'Desktop3', _price: 30},
    {_title: 'Desktop4', _price: 40},
];

let arrayOfObj = dataFromServer.map((product) => {
    return new Product2(product._title, product._price);
});

console.log(arrayOfObj[0].getDetails());