"use strict";
var _a;
let sales = 123546789;
let course = "TypeScript";
let is_published = true;
let account = 123456789;
let names = "harry";
let level = true;
let lev;
function render(document) {
    console.log(document);
}
let num = [1, 2, 1, 3, 6];
let num1 = [1, 2, 3, 5];
let user = [1, "hello"];
user.push(5);
;
let mySize = 1;
console.log(mySize);
function calculatorTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculatorTax(10000);
let employee = {
    id: 1,
    name: 'Mosh',
    retire: (date) => {
        console.log(date);
    }
};
let employees = {
    id: 1,
    name: "tanveer",
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weights) {
    if (typeof weights === 'number')
        return weights * 2.2;
    else
        return parseInt(weights) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('hola!');
}
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=hello.js.map