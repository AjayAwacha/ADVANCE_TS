// namespace is typescript feacture that provide a way to organize 
// and group related code into logical containers
// so we can export container from there and import that container from somewhere
// Note that Note that if you are using a module system (e.g., CommonJS or ES modules), it is recommended to use module imports and exports
// Namespace will not work there


namespace myNamespace {
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
}

// console.log(myNamespace.PI);
// console.log(myNamespace.calculateArea(5));
