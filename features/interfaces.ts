interface Motor {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true
};

const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
  console.log(`Name: ${vehicle.name}`); // ES2015 template string: ``
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
}; // long type annotation - line 7

printVehicle(oldCivic);

const printVehicleWithInterface = (vehicle: Motor): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
}; // fix long type annotation

printVehicleWithInterface(oldCivic);

// Interface can contain any type: primitive and reference types
interface VehicleAny {
  name: string;
  year: number;
  broken: boolean;
  date: Date; // reference
  summary(): string; // function property is "functionName()", string is return type
}

const oldFordham = {
  name: "fordham",
  year: 1998,
  broken: false,
  summary(): string {
    return `Name: ${this.name}`; // use "this" keyword
  } // follow the VehicleAny interface, must have this summary() method
};

const printVehicleAny = (vehicle: VehicleAny): void => {
  console.log(vehicle.summary()); // use () to invoke the func
};

interface Reportable {
  summary(): string;
} // refactor from VehicleAny interface

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  } // summary function type
}; // Both drink and oldFordham are Reportable type

const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

printSummary(oldFordham); // as long as the argument satisfies the interface, it's ok
printSummary(drink);
