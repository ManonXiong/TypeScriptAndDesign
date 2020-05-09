const carMakers = ["ford", "toyota", "chevy"]; // not empty, no need to specify
const carmakers: string[] = []; // empty string, specify the type
const dates = [new Date(), new Date()];

const carsByMake = [
  ["f150"],
  ["corolla"],
  ["camaro"]
]; // string[][] - 2D
const carsbymake: string[][] = []; // empty arr, need type annotation

// Help with inference when extracting values
const carr = carMakers[0]; // car: string
const myCar = carMakers.pop(); // remove the last elem

// Prevent incompatible values
// carMakers.push(100);

// Help with "map", "forEach", "reduc" functions
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), "2019-03-15"];
const mainDates: (Date | string)[] = [new Date()]; // don't forget `[]`
mainDates.push("2030-10-10");
mainDates.push(new Date());
