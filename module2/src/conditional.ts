{
  //conditional type

  type Shack = {
    bike: string;
    car: string;
    ship: string;
  };


  type Vehicle<T> = T extends keyof Shack ? true : false ; 

  type HashMaster = Vehicle<"car">
}
