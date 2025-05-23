//1 
interface IEmployee {
    readonly id: number;
    name: string;
    email: string;
}
interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}
class Employee implements IEmployee {
    private username: string;
    private static count: number = 0;
    constructor(
        readonly id: number,
        public name: string,
        username: string,
        public email: string,
        protected address: IAddress
    ) {
        Employee.count++;
        this.address = address;
        this.username = username;
    }
    public static getEmployeeCount(): number {
        return Employee.count;
    }
    public getUsername(): string {
        return this.username;
    }
}
let emp1 = new Employee(1, "abanoub", "bebo", "abanoub@gmalk.com", { street: "st1", suite: "s1", city: "cairo", zipcode: "12345", geo: { lat: "12.3", lng: "45.6" } });
let emp2 = new Employee(2, "danial", "dani", "abanousab@gmalk.com", { street: "st2", suite: "s2", city: "fayium", zipcode: "121315", geo: { lat: "12.3", lng: "45.6" } });
console.log(emp1);
console.log(emp2);
console.log(Employee.getEmployeeCount());
//2,3
function log(classname: Function) {
    const getdate = new Date().toLocaleString();
    console.log("creaTed At :", getdate, ", Class :", classname.name);
}
@log
class Manager extends Employee {
    constructor(
        id: number,
        name: string,
        username: string,
        email: string,
        address: IAddress,
    ) {
        super(id, name, username, email, address);
    }
    public getAddress(): IAddress {
        return this.address;
    }
}
let emp3 = new Manager(3, "adam", "bebo", "sdsad@ff", { street: "st22", suite: "s22", city: "cairo", zipcode: "1231345", geo: { lat: "122.3", lng: "451.6" } });
console.log(emp3.getAddress());
//4

export namespace MathOperations {
    export function add(a: number, b: number): number {
        return a + b;
    }
}

