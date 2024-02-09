interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail : () => string
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}
interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ts" | "learner";
}

const luix: Admin = {
  dbId: 22,
  email: "l@gmail.com",
  userId: 3326,
  role: "admin",
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "luix12", off: 15) => {
    return 10;
  },
};
luix.email = "luix@MediaList.com";
// luix.dbId = 15  // readonly
