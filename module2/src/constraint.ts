{
  //

  // generic constraint with key of operator

  type Vichel = {
    bike: string;
    car: string;
    helmet: string;
  };

  type Owner = "bike" | "car" | "helmet"; // menualy

  type Owner2 = keyof Vichel;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "subahan",
    age: 66,
    address: "tkg",
  };
  const car = {
    model: "Toyota",
    year: 2022,
  };

  const result1 = getPropertyValue(user, "age");
 
  //
}
