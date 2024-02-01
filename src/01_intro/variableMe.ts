const greetings: string = "Hello Luix";

greetings.toLowerCase();
console.log(greetings);

// number

let userId = 23551.52;

userId.toFixed();
// userId = "luix"
console.log(userId);

// boolean
let isLoggedIn: boolean = false;
console.log(isLoggedIn);

// any

let hero: string;
function getHero() {
  return "Thor";
}
hero = getHero();

export {};
