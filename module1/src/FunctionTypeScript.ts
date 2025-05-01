// learning Function
// Normal Function
// Arrow Function

// Normal Function
function add(num1: number, num2: number): number {
  return num1 + num2;
}
console.log("Normal Function Result:", add(2 + 2, 5));

// Arrow Function Typescript
const addArrow = (num1: number, num2: number): number => num1 + num2;
console.log("Arrow Function Result:", addArrow(2, 4));

// object => function ..> Method

const userName = {
  name: "Subahan",
  balance: 0,
  addBalance(balance: number): string {
    return `My Balance is ${this.balance + balance}`;
  },
};

const total = userName.addBalance(100);
console.log("total balance", total);

// callBack Function
const arr: number[] = [1, 2, 3, 4, 5];
const newArray = arr.map((element: number): number => element * element);
console.log("Number is equal ", newArray);
