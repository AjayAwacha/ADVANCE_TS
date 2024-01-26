// in typescript, index property enable us to create object which have any number of properties and have any key name with specific type and its value
// we can create index property using []

interface indexProp {
    [key: string]: number
}

let obj: indexProp;
obj = {
    a: 10,
    b: 20,
    c: 30
}
console.log(obj.a);