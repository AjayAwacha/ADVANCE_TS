// function overload allow us to define multiple signature for same function

type com = string | number;

function addition(num1: string, num2: string): string;
function addition(num1: number, num2: number): number;
function addition(num1: string, num2: number): string;
function addition(num1: number, num2: string): string;
function addition(a: com, b: com): com {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString + b.toString();
    }
    return a + b;
}

// optional chaining operator(?.)
// are used to access property or method that may be null or undefined in object

interface Man {
    name: string,
    age?: number,
    address?: {
        city: string,
        state?: string
    }
}

let man: Man;
man = {
    name: 'Sopan'
}
console.log(man?.address?.state);

// Nullish coalescing operator
// it's work same like || operator only difference is or work with 
// all nullish value means null, undefined, 0, false, '', NaN

let userIn = ''
console.log('|| shows ', userIn || 'Default');
console.log('?? shows ', userIn ?? 'Default');