const drinkTuple = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

// Type alias, no need to specify tuple variables each time
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ["brown", true, 40]; // (string | number | boolean)[]
// pepsi[0] = 40; -- error
const cola: Drink = ["black", false, 10];

const carSpecs: [number, number] = [400, 3354];
// Make in object
const carStates = {
  horsepowe: 400,
  weigt: 3354
};
