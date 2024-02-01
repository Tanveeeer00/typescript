function addTwo(num: number): number {
  return num + 1;
  // return "hello"
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let myValue = addTwo(5);
getUpper("Luix");

signUpUser("luix", "l@l.com", true);
loginUser("Luix", "l@l.com");

// function getValue(myValue:number): boolean {
// if (myValue > 5) {
// return true
// }
// return "200 ok"
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1,2,3]

heros.map((hero) => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
