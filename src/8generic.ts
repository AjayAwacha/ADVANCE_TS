// generic type is type that we assign dynamically
// generic type is type that coonected to another type
// example array itself is one type and what type of element stored inside it is another type
// array and promise are build in generic type in typescript

// normal type
let arr_test: string[];

// generic type
let arr_test2: Array<string>

// both declaration are same

// Promise<string> is build in generic type in typescript
let promise1: Promise<string> = new Promise((resolve, reject) => {
    resolve('i resolve promise')
})

promise1.then((res) => {
    res.split(' ');
})

// generic function

function merge<T, U>(obj1: T, obj2: U) {
    return Object.assign({},obj1, obj2);
}

let mergedObj = merge({name: 'Ajay'}, {age: 26});
console.log(mergedObj.age);

// in above example T and U type are filled dynamically when we called function and pass object type parameter in it

// we can also defined T and U type while calling function
let mergedObj2 = merge<{name: string}, {age: number}>({name: 'Ajay'}, {age: 26});

// constraint in generic
// in above example T and U are of any type they don't give an error
// merge2({fName: 'Ajay'}, 30); this will work without seting constraint

// but suppose we want to allow only object type then we can do it using constraint

function merge2<T extends object, U extends object>(obj1: T, obj2: U) {
    return Object.assign({},obj1, obj2);
}
// merge2({fName: 'Ajay'}, 30);  // not work after set constraint

// another generic function

interface lengthy {
    length: number
}
function countAndDescribe<T extends lengthy>(element: T) {
    let description = '';
    if (element.length === 1) {
        description = 'i got 1 elemet.';
    } else {
        description = `i got ${element.length} elements`;
    }
    return [element, description]
}

console.log(countAndDescribe('array'));
console.log(countAndDescribe(['min', 'max']));
// console.log(countAndDescribe(10));  // not allowed bucause number don't have length property

// keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}

console.log(extractAndConvert({name: 'Ajay'}, 'name'));

// generic class
// we are sending type of data dynamically at the time of creating class object

class dataStorage<T extends number | string> {
    data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getitems() {
        return this.data;
    }
}

const arr1 = new dataStorage<string>();
arr1.addItem('min');
arr1.addItem('mid');
arr1.addItem('max');
arr1.removeItem('mid');
console.log(arr1.getitems());

const arr2 = new dataStorage<number>();
arr2.addItem(1);
arr2.addItem(2);
arr2.addItem(3);
arr2.removeItem(2);
console.log(arr2.getitems());


// difference between generic type and union type
// generic type use any one type of value thrount the class instance or function
// union type allow to use more then ont type of value in same class or function

