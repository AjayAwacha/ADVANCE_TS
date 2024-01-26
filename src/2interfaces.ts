// interface allow us to define structure of object
// define how our object will look like

interface Person {
    name: string,
    age: number,
    greed(phrase: string): void;
}

let user: Person;

user = {
    name: 'Ajay',
    age: 26,
    greed(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}
user.greed('Hello my name is');

// interface also use to force class to provide implementation of property and method

interface ForceImple {
    college: string;

    study(text: string): void;
}

// ForceImple interface force Student class to provide implementation of property and method declare inside  interface
// we can extend one class and multiple interface once

// this is work similar as abstract class but only difference is that abstract class can have both abstract and non abstract method
// interface can have only declaration initialitation is not possible in interface
class Student implements ForceImple {
    college: string;

    constructor() {
        this.college = 'D.S.M';
    }

    study(text: string): void {
        console.log(text);
    }

    additionalMethod() {
        console.log('additional method');
    }
}

// why interface
// it force object of some specific type and also force class to implement specific property and method

// readonly property in interface
interface readOnlyTest {
    readonly funct: string
}

let user2: readOnlyTest;

user2 = {
    funct: 'sdfsdf'
}
// user2.funct = 'sdfsf';  // not allowed to change its value because its read only

// interface extending another interface
interface interface1 {
    prop1: string
}
interface interface2 extends interface1 {
    prop2: string
}

let user3: interface2;
user3 = {
    prop1: 'asAD',
    prop2: 'adsad'
}

class interfaceExtend implements interface2 {
    prop1: string;
    prop2: string;

    constructor() {
        this.prop1 = 'string';
        this.prop2 = 'string';
    }
}

// if inetrfaces not extend each other
class interfaceExtend2 implements interface1, interface2 {
    prop1: string;
    prop2: string;

    constructor() {
        this.prop1 = 'string';
        this.prop2 = 'string';
    }
}

// interface as an function type

// custom type for function type
type testFun1 = (a: number, b: number) => number;

//using interface
interface testFun2 {
    (a: number, b: number): number;
}

let add: testFun2;
add = (a, b) => {
    return a + b;
}
console.log(add(10, 20));

// optional property
interface inter {
    param1?: string,
    param2: string
}
let user4: inter;
user4 = {
    param2: 'sadsf'
}

// optional parameter
interface testFun3 {
    (a: number, b?: number): void;
}
let printData: testFun3;
printData = (num, tyy) => {
    console.log(num);
}

// interface are not compiled into javascript code
// because its just feacure available in ts not available in js

// simple difference between class and interface is interface is not initialized and not compiled