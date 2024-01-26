// intersection type 

// intersection type are use to combine two or more type

type Person1 = {
    name: string,
    age: number
}
type Employee1 = {
    company: string,
    position: string
}

// creating intersection type
type intersectionType = Person1 & Employee1;

// we can also do this using if Person1, Employee1 are interface
// interface intersectionType extends Person1, Employee1 {}

let testData1: intersectionType;
testData1 = {
    name: 'asdf',
    age: 23,
    company: 'sdasd',
    position: 'asdasd'
}

type test1 = number | string;
type test2 = boolean | string;
type interSection = test1 & test2;

let testData2: interSection;

// testData2 allow only string type
// testData2 = 10;  // not allowed

