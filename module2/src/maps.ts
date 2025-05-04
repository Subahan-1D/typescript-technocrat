{
  // map types

  const arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 7, 8, 9, 10];

  const arrayOfString: string[] = arrayOfNumbers.map((number) =>
    number.toString()
  );
  console.log(arrayOfString);

  /// number theke string a convert

  // map diya type change
  type areaNumber = {
    height: number;
    width: number;
  };
  
  type Height = areaNumber["height"] // look up type

  type areaOfString = {
    [index in keyof areaNumber]: string;
  };
}
