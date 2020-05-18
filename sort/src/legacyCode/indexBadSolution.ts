class Sorter1 {
  // Equivalent to:
  // collection: number[];

  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }
  constructor(public collection: number[] | string) { // `|` union operator
  };

  sort(): void {
    // equivalent: `const length = this.collection.length;`
    const { length } = this.collection;

    // All of this only works if collection is number[]
    // if collection is an array of numbers
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (this.collection instanceof Array) { // Type Guard
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }
      }
    }

    // Only going to work if collection is a string
    // If collection is a string, do this logic instead.
    // Logic 
    if (typeof this.collection === "string") { // Type Guard
      
    }

    // Note of Type Guard:
    // For primitive types (boolean, number, string, symbol):
    // `typeof` -> return a string value of the type
    // For every other type of value:
    // `instanceof` -> every other value that's created with a constructor
    // Use Type Guard to restore access to a set of properties in a union type
  }
}

const sorterrrr = new Sorter1([10, 3, -5, 0]);
console.log(sorterrrr.collection);
sorterrrr.sort();
console.log(sorterrrr.collection);