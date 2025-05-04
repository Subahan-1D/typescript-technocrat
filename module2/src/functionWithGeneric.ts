{
  //

  // Function With Generic

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const res2 = createArrayWithGeneric(<boolean>true);
  const res3 = createArrayWithGeneric(<string>"Bangladesh");

  const res1 = createArray("Bangladesh");

  interface Jeneric  {
    id: number;
    name: string;
    admin: boolean;
  };
  const res4 = createArrayWithGeneric<Jeneric>({
    id: 44,
    name: "subahan",
    admin: true,
  });
  console.log(res4)

  //
}
