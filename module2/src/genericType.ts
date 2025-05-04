{
  // type generic

  //   const RollNumber: number[] = [1, 2, 3, 4, 5];
  //   const Mentors: string[] = ["Mr.X", "Mr.Y", "Mr.Z"];

  //   const boolArray: boolean[] = [true, false, true];

  type GenericArray<T> = Array<T>;

  // generic type array
  const RollNumber: GenericArray<number> = [1, 2, 3, 4, 5];

  const Mentors: GenericArray<string> = ["Mr.X", "Mr.Y", "Mr.Z"];

  const boolArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Subahan",
      age: 20,
    },
    {
      name: "Juwel",
      age: 22,
    },
    {
      name: "Masud",
      age: 56,
    },
  ];

  console.log("Rong process", user);
  const add = (x: number, y: number) => x + y;
  add(40, 20);
}
