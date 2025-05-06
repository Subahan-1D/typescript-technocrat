{
  //  parent hisabe use korbo

  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep Hours ${numOfHours}`);
    }
  }

  // Inheritance Opp

  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Md.Subahan", 20, "Thakurgaon Sador");
  student1.getSleep(12)

  class Teacher extends Parent {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass} attent`);
    }
  }

  const teacher = new Teacher(
    "Md.Sultan Sir",
    25,
    "Hobiganj Polytechnic Institute",
    "Professor"
  );
  teacher.takeClass(3)
}
