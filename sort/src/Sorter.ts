interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
} // instructions on how to be eligible to do sorting

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

// The original one is in file `SorterInSecondEdition.ts`.
// Now `Sorter` class no need to contain the data / collection,
// because we are not going to instantiate this class any more.
// Solution:
// Turn to an "abstract" class
// abstract class = a class that cannot be instantiated but can be inherited
// use `abstract` in front of the methods =>
// these methods will be implemented in the future, promise to implement by child class.
