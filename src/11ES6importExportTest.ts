export const PI = 3.14;

export function calculateArea(radius: number): number {
    return PI * radius * radius;
}

export class Circle {
    constructor(public radius: number) { }

    getArea(): number {
        return calculateArea(this.radius);
    }
}

// export default function defaultTest() {
//     console.log('default export function called.');
// }

function funOne() {
    console.log('One');
}
function funTwo() {
    console.log('One');
}
function funThree() {
    console.log('One');
}
export default {
    fun1: funOne,
    fun2: funTwo,
    fun3: funThree
}
// Accessing inside file itself
// console.log(PI);
// console.log(calculateArea(5));
// let obj = new Circle(6);
// console.log(obj.getArea());
