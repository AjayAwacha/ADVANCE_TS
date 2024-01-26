import { PI as pi, calculateArea, Circle } from "./11ES6importExportTest.js";
import * as allData from "./11ES6importExportTest.js";
// import defaultTest, { PI, calculateArea, Circle} from "./11ES6importExportTest.js";
import data from './11ES6importExportTest.js';

console.log(allData.PI);

console.log(pi);
console.log(calculateArea(5));
let obj = new Circle(6);
console.log(obj.getArea());

console.log(data.fun1());