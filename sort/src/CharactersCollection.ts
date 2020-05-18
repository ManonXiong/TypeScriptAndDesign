import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  // implement Arbitrary Collection
  swap(leftIndex: number, rightIndex: number): void {
    // cannot change the chars in a string directly
    // Sol: turn the string to an array of Char, and swap in that array
    // Implement 1: use `slice` method
    // Implement 2: directly turn
    const characters = this.data.split(""); // return: string[]
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.data = characters.join("");
  }
}

// Version in 2nd Edition
// ```
// export class CharactersCollection {
//   constructor(public data: string) {}

//   get length(): number {
//     return this.data.length;
//   }

//   compare(leftIndex: number, rightIndex: number): boolean {
//     return (
//       this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
//     );
//   }

//   swap(leftIndex: number, rightIndex: number): void {
//     const characters = this.data.split("");
//     const leftHand = characters[leftIndex];
//     characters[leftIndex] = characters[rightIndex];
//     characters[rightIndex] = leftHand;

//     this.data = characters.join("");
//   }
// }
// ```
