{
  // interface

  // type alias
  type User1 = {
    name: string;
    age: number;
  };

  //
  type UserWithRoll = User1 & { role: string };

  const user1: UserWithRoll = {
    name: "Subahan",
    age: 19,
    role: "Student",
  };

  // type interface

  interface User2 {
    name: string;
    roll: number;
  }

  interface UserWithRoll1 extends User2 {
    age: number;
  }

  const user2: UserWithRoll1 = {
    name: "Juwel",
    roll: 677317,
    age: 20,
  };

  // jst --> object  array --> object  function --> object
  interface Roll1 {
    [index: number]: number;
  }
  type Roll2 = number[];

  const roll1: Roll1 = [1, 2, 3];

  // type function
  type Add1 = (num1: number, num2: number) => number;

  // interface function
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;

  console.log("type alias system Function", add(2, 5));
}
