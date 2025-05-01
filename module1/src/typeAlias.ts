{
  // type alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    roll: number;
    isAdmin: boolean;
  };
  const student1: Student = {
    name: "Subahan",
    age: 22,
    gender: "Male",
    roll: 677318,
    isAdmin: true,
  };
  const student2: Student = {
    name: "Juwel",
    age: 25,
    gender: "Male",
    roll: 677318,
    isAdmin: false,
  };

  // type alias system
  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;

  console.log("Add Function",add(2,4));
}
