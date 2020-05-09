class Vehicle1 {
  color: string;
  public drive(): void {
    console.log("chugga chugga");
  } // without "public", the same

  constructor(color: string) {
    this.color = color; // way1 for initialization
  } // Way2: initialize using "color: string = 'red'" is ok

  protected honk(): void {
    console.log("Beep");
  } // access by this class and its child classes, not outside any of these.
}

const vehicle1 = new Vehicle1("blue");
console.log(vehicle1.color);

class Vehicle {
  // use "public" or "private" or "protected" access modifier
  constructor(public color: string) {} // new syntax to declare and initialize a field

  protected honk(): void {
    console.log("beep");
  } 
}

class Car extends Vehicle {
  // no "public", no declaration of `color` var again
  constructor(public wheels: number, color: string) {
    super(color); // a drerived class should have a "super" call
  }
  // rewrite drive() if it exists in super class, Vehicle
  private drive(): void {
    console.log("vroom");
  }
  
  startDrivingProcess(): void {
    this.drive();
    this.honk(); // access honk() from child class
  }
}

const car = new Car(4, "orange");
car.startDrivingProcess();
// car.honk(); -- error
console.log(car.color); // print: red

// Instance method modifiers: public(dfault), private, protected
// If a method in sub-class changes to private,
// while it's public in super class, error raises.
// "private" cannot ensure security

