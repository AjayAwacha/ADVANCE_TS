// typeguard is some keyword that allow us to tell which type of value we receive at runtime
// mostlly this are usefull when working with union type
// mostlly used typeguard are typeof, in, instanceof

type simpleComb = number | string; // union type

function performAddition(a: simpleComb, b: simpleComb) {
    // typescript not allowed to directlly add a + b
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString + b.toString();
    }
    return a + b;
}

type Employee = {
    name: string,
    job: number
}

type Human = {
    name: string
}

type combinable2 = Employee | Human;

function pri(data: combinable2) {
    console.log(data.name);
    if ('job' in data) {
        console.log(data.job);
    }
}
pri({name: 'Ajay', job: 25});
pri({name: 'Unknown'});

class Car {
    run() {
        console.log('car is running..');
    }

    ac() {
        console.log('ac is present');
    }
}

class Truck {
    run() {
        console.log('truck is running..');
    }
}

type combinable3 = Car | Truck;

function printA(receivedClass: combinable3) {
    receivedClass.run();
    if (receivedClass instanceof Car) {
        receivedClass.ac();
    }
}
const car = new Car();
const truck = new Truck();
printA(car);
printA(truck);

// Descriminator type
// descriminator type are used to help while working with type guard

interface Bird {
    type: 'bird',
    flyingSpeed: number
}

interface Horse {
    type: 'horse'
    groundSpeed: number
}

type AnimalTest = Bird | Horse;

function animalTest(data: AnimalTest) {
    // using type guard
    // if ('flyingSpeed' in data) {
    //     console.log(data.flyingSpeed);
    // }
    // if ('groundSpeed' in data) {
    //     console.log(data.groundSpeed);
    // }

    // we make it easy by adding type with each object
    switch(data.type) {
        case 'bird':
            console.log(data.flyingSpeed);
            break;
        case 'horse':
            console.log(data.groundSpeed);
            break
    }
}

// using type guard
// animalTest({flyingSpeed: 10});
// animalTest({groundSpeed: 9});

animalTest({type: 'bird', flyingSpeed: 11});
animalTest({type: 'horse', groundSpeed: 12});

