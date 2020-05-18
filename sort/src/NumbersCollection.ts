import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  } // getter
  // Application: type `collection.length;` directly,
  // it will access this get method and return the length

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }  
}

// Version in 2nd Edition
// ```
// export class NumbersCollection extends Sorter {
//   constructor(public data: number[]) {
//   }

//   get length(): number {
//     return this.data.length;
//   } // getter
//   // Application: type `collection.length;` directly,
//   // it will access this get method and return the length

//   compare(leftIndex: number, rightIndex: number): boolean {
//     return this.data[leftIndex] > this.data[rightIndex];
//   }

//   swap(leftIndex: number, rightIndex: number): void {
//     const leftHand = this.data[leftIndex];
//     this.data[leftIndex] = this.data[rightIndex];
//     this.data[rightIndex] = leftHand;
//   }  
// }
// ```
