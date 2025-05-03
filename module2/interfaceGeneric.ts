{
  //

  interface Developer<X, Y = null> {
    name: string;
    roll: number;
    computer: {
      model: string;
      brand: string;
    };
    smart: X;
    bike ?: Y;
  }

  type SmartWatch = {
    brand: string;
  };
  type BrandBike = {
    model: string;
    price: number;
  };

  const poorDeveloper: Developer<SmartWatch, BrandBike> = {
    name: "Subahan",
    roll: 677317,
    computer: {
      model: "Core i 5",
      brand: "HP",
    },
    smart: {
      brand: "Capacity High",
    },
    bike: {
      model: "R15",
      price: 50000000,
    },
  };

  type SmartWatch1 = {
    brand: string;
    model: number;
  };
  const poorDeveloper1: Developer<SmartWatch1> = {
    name: "Subahan",
    roll: 677317,
    computer: {
      model: "Core i 5",
      brand: "HP",
    },
    smart: {
      brand: "Capacity High",
      model: 77,
    },
  };

  //
}
