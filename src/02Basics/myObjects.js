"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "luix",
    email: "l@L.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "luixz", isPaid: true };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 5200 };
}
function createUser2(user) {
    return { name: "", email: "", isActive: true };
}
createUser2({ name: "", email: "", isActive: true });
var myUser = {
    _id: "12325",
    name: "luix",
    email: "l@lgmail.com",
    isActive: true,
};
myUser.email = "Luix@gmail.com";
