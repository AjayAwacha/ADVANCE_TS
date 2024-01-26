class Department {
    departmentName: string;
    readonly schoolName : string = 'D.S.M college';
    // private and protected property only access inside the class
    // diff btn them is private can access only inside the class in which they declare
    // private employee: string[] = []; // accessible only inside Department class
    // protected employee: string[] = []; // accessible bothe Depart and who inherite Depart class means inside ItDepartment classs
    protected employee: string[] = [];

    constructor(private id: string, n: string) {
        this.schoolName = 'sdfdsv';
        this.id = id;
        this.departmentName = n;
    }

    describe(this: Department) {
        // this.schoolName = 'vxcvx';  // we can't change readonly property inside class methods
        console.log('department is : ', this.departmentName); 
    }

    addEmployee(empName: string) {
        this.employee.push(empName);
    }
}

const d1 = new Department('01', 'Tech');
d1.describe();

// this always point to the owner of function / who called function
// const d1Copy = {
//     departmentName: 'Design',
//     describe: d1.describe
// }
// d1Copy.describe();

const d2 = new Department('02','Marketing');
d2.addEmployee('Ajay');
d2.addEmployee('Sopan');
// d2.employee[2] = 'Laxman';  // not good practice
// console.log(d2.employee);  // we can't acces if we make it private

class ItDepartment extends Department {
    constructor(id: string, private skills: string[]) {
        super(id, 'Tech');
        this.skills = skills;
    }

    addSkill(addVal: string) {
        this.skills.push(addVal);
        this.employee
    }
}

const itDep1 = new ItDepartment('01', ['HTML', 'CSS', 'JS', 'Angular']);
itDep1.addEmployee('emp1');
itDep1.addEmployee('emp2');
console.log(itDep1);

class AccountDepartment extends Department {
    // static property only accessible inside static method not accessible in non static area
    // if you want to access static property inside non static area then we can do it using classname
    // inside staic area only static property is accessible
    static staticProp: string = 'D.S.M college';
    private lastReport: string;
    constructor(id: string, private reports: string[]) {
        super(id, 'Account');
        // this.reports = reports;
        this.lastReport = reports[0];
    }

    printReports() {
        console.log(this.reports);
    }

    // we can use getter and setter to set and get property value
    get getLastReport() {
        if (!this.lastReport) {
            throw new Error('report not available');
        }
        return this.lastReport;
    }

    set setLastReport(value: string) {
        this.lastReport = value;
    }
}

console.log(AccountDepartment.staticProp);
const accountInstance = new AccountDepartment('3', []);
accountInstance.setLastReport = 'LastRepo';
console.log(accountInstance.getLastReport);
accountInstance.printReports();

abstract class Animal {
    abstract makeSound() : void;

    move() {
        console.log('moving..');
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log('bho.. bho..');
    }
}

const dog = new Dog();
dog.makeSound();
dog.move();

class SingleTonClass {
    private static instance: SingleTonClass;
    // if we make our constructor is private then creating object from outside the class is not possible
    private constructor() {}

    // if below method is Normal then this method never get called
    // to call method without createing object we make it static
    static createInstance() {
        if (!SingleTonClass.instance) {
            SingleTonClass.instance = new SingleTonClass();
        }
        return SingleTonClass.instance;
    }
}

// const inst1 = new SingleTonClass(); // not possible because constructor is private
const one = SingleTonClass.createInstance();
const two = SingleTonClass.createInstance();
console.log(one === two);