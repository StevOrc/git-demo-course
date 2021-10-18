const person = {
  age: 43,
  isGold: true,
  firstName: "Steven",
  describeJob() {
    return `${this.firstName} is a  ${this.job ? this.job : "unemployed"}`;
  },
};

const steven = { ...person, lastName: "Orcun", job: "Dev" };
const berny = {
  ...person,
  lastName: "Yalap",
  firstName: "Bernard",
  job: "Teacher",
};

console.log(steven.describeJob());
console.log(berny.describeJob());
