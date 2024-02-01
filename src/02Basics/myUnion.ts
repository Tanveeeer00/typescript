let score: number | string = 33;
score = 44;
score = "44";
console.log(score);

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let luix: User | Admin = { name: "Luix", id: 334 };
luix = { userName: "hc", id: 34565 };
console.log(luix);

function getObid(id: number | string) {
  // making some api calls
  console.log(`DB is is : ${id}`);
}
getObid(4);
getObid("4");

function getObid1(id: number | string) {
  if (typeof getObid1 === "string") {
    // id.toLowerCase()
  }
  return id;
}
getObid1(12);
// ARRAY

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = ["1", "2", "3", true];
console.log(data);
console.log(data2);
console.log(data3);

let seaAllotment: "aisle" | "middle" | "window";
seaAllotment = "aisle";
// seaAllotment = "crew"
console.log(seaAllotment);
export {};
