function groupPeopleByGender(peopleArray) {
  const groupedPeople = { females: [], males: [] };
  for (const personString of peopleArray) {
    const [fullName, age, gender] = personString.split(", ");
    // console.log(`This is fullName ${fullName}`);
    const [firstName, secondName] = fullName.split(" ");
    // console.log(firstName, secondName);
    const personInfo = { secondName, age: parseInt(age) };
    if (gender.toLowerCase() === "female") {
      groupedPeople.females.push({ [firstName]: personInfo });
    } else if (gender.toLowerCase() === "male") {
      groupedPeople.males.push({ [firstName]: personInfo });
    }
  }
  return groupedPeople;
}
const result = [
  "Patrick wyne, 30, male",
  "lil wyne, 32, male",
  "Eric mimi, 21, female",
  "Dodos deck, 21, male",
  "Alian Dwine, 22, male",
  "Patrick wyne, 33, male",
  "Patrick wyne, 10, trans",
  "Patrick wyne, 40, male",
];
let answer = groupPeopleByGender(result);
console.log(answer);
