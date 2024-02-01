const user = {
  name: "luix",
  email: "l@L.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "luixz", isPaid: true };
createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 5200 };
}

type User1 = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser2(user: User1): User1 {
  return { name: "", email: "", isActive: true };
}

createUser2({ name: "", email: "", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myUser: User = {
  _id: "12325",
  name: "luix",
  email: "l@lgmail.com",
  isActive: true,
};

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "Luix@gmail.com";
// myUser._id = "check";

export {};
