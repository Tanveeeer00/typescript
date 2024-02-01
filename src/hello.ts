// tsc --init  |for tsconfig.json (configuration)
// "preLaunchTask": "tsc: build - tsconfig.json",         |for debugging through configuration

/*
console.log("Hello World");
let age: number = 20;
if (age < 50)
    age += 10;
console.log(age);
*/

let sales: number = 123_546_789;
let course: string = "TypeScript";
let is_published: boolean = true;

// another way
let account = 123456789;
let names = "harry";
let level = true;

// ANY | there are 2 way to use 1. ": any" 2. "go to tsconfig.json file then tyechecking then NoImplicent = false but its not good practice "
let lev;

function render(document: any) {
  console.log(document);
}

// ARRAY
let num: number[] = [1, 2, 1, 3, 6];
let num1 = [1, 2, 3, 5];

// TUPLE
let user10: [number, string] = [1, "hello"];
user10.push(5); // push() exceptional

// ENUM

/*const small = 1;
const medium = 2;
const large = 3;
*/

//PascalCase

const enum Size {
  Small,
  Medium,
  Large,
}
// enum Size {Small = 1, Medium = 2, Large = 3};
// enum Size {Small = 's', Medium='m', Large='l'};
let mySize: Size = Size.Medium;
console.log(mySize);

// FUNCTIONS

function calculatorTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}
calculatorTax(10_000);

// OBJECTS
let employee: {
  id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};

// Type Aliases
type Employees = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
let employees: {} = {
  id: 1,
  name: "tanveer",
  retire: (date: Date) => {
    console.log(date);
  },
};

// union type
function kgToLbs(weights: number | string): number {
  // Narrowing
  if (typeof weights === "number") return weights * 2.2;
  else return parseInt(weights) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");

// Intersection Types
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

// Nullable Types
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("hola!");
}

greet(undefined);

type Customer = {
  birthday: Date;
};
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);

// Optional property access operator
// if (customer !== null)
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// if (customer !== null && customers !== undefined
// customer?.[0]         (instead of uppper line)

// Optional call
let log: any = null;
log?.("a");
