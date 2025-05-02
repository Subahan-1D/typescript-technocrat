{
  //Ternary, optional chaining & nullish coalescing operator

  const age: number = 18;

  if (age >= 18) {
    console.log("Adalt");
  } else {
    console.log("Not Adalt");
  }

  // ternary operator
  const isAdalt = age >= 18 ? "Votar" : "Not a Votar";
  console.log({isAdalt})
}
