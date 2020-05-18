import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// Number[]
const numbersCollection = new NumbersCollection([50, 3, -5 ,0]);
numbersCollection.sort();
console.log(numbersCollection);

// String
const charactersCollection = new CharactersCollection("XaayB");
charactersCollection.sort();
console.log(charactersCollection);

// build a linked list
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
// Linked List
linkedList.sort();
linkedList.print();


// Note:
// 1. The bad code for customizing Sorter to fit both number[], string and LinkedList,
// and for other recap notes, is in file "indexBadSolution.ts".
// 2. Union operator
// 3. Extract key logic to different classes
// 4. We extract the code to `Sorter`, `NumbersCollextion`, `LinkedList` and `CharactersCollection`
// classes. In this process, we add an interface, `Sortable` to the `Sort` class.
// This is the refactor, making use of reusable code, in file, `indexSecondEdition.ts`.
// 5. However, in this version, we have to instantiate a Sorter instance for sorting.
// This is painful. We want `numbersCollection.sort()`, not `sorter(numbersCollection);`.
// Solution: use Inheritance to make all the collections' classes have the `sort` method.
