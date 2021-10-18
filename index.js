const person = {
  age: 43,
  isGold: true,
  firstName: "Steven",
};

const steven = { ...person, lastName: "Orcun" };
const berny = { ...person, lastName: "Orcun", firstName: "Bernard" };

console.log(steven);
console.log(berny);
