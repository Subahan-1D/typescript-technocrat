{
  // object oriented programming

  class Person1 {
    // class er property
    // name: string;
    // age: number;
    // isAdmin: boolean;

    // parameter properties


    constructor(public name: string, public age: number, public isAdmin: boolean) {
    //   (this.name = name), (this.age = age), (this.isAdmin = isAdmin);
    }

    // class er moddhe method create
    goMake() {
      console.log(
        `My Name is ${this.name} islam Old is ${this.age} or is admin ${true}`
      );
    }
  }

  const subahan = new Person1("Subahan", 19, true);
  subahan.goMake();
  const juwel = new Person1("Juwel", 20, false);
  juwel.goMake()
}
