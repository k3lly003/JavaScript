//Destructuring
//Taking a value from arrays or properties of an object and set them as local valiables

//Old way😔
const bigCats = ["🦁", "🐯"];
const tiger = arr["🐯"];
const lion = arr["🦁"];

//New way😎
const [egg, fish] = ["🥚", "🐟"];

//the synthax looks the same as that of useState in react
const [num, setNum] = useState(0);
//
const arr = ["🥓", "🍉", "🍟"];
const [bacon, waterMellon, fries] = food;

const obj = {
  banana: "🍌",
  bugger: "🍔",
  pizza: "🍕",
};
const { banana, ...rest } = obj;

console.log(rest);

// Destructuring can also work on Nested obj

const object = {
  banana: "🍌",
  bugger: "🍔",
  pizza: "🍕",
  parent: {
    child: "👶",
  },
};
const {
  parent: { child },
} = object;

console.log(child);

//U can ignore Values

const cars = {
  van: "🚐",
  truck: "🚛",
  bus: "🚎",
  ambulance: "🚑",
};
const [, , , ambulance] = car;

console.log(car);
