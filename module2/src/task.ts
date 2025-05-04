{
  // task 1 Basic Data Types and First Program
  //Objective: Write a TypeScript program that outputs a welcome message.

  let developer: string;
  developer =
    "Hello World, I will complete this course successfully and become a Next level Web Developer!";
  console.log(developer);
  //task : 2 Functions, Optional, and Literal Types
  //Objective: Create a function with parameters and an optional literal type.
  function describePerson(
    name: string,
    age: number,
    role?: "admin" | "user" | "guest"
  ): void {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    if (role) {
      console.log(`Role: ${role}`);
    } else {
      console.log("Role: Not specified");
    }
  }
  describePerson("subahan", 18, "admin");

  // task : 3 Object Types, Type Alias, & Literal Types
  // Objective: Define a structured Person object using Type Aliases.
  type Person = {
    name: string;
    address: string;
    hairColor: string;
    eyeColor: string;
    income: number;
    expense: number;
    hobbies: string[];
    familyMembers: string[];
    job: string;
    skills: string[];
    maritalStatus: "single" | "married" | "divorced" | "widowed";
    friends: string[];
  };

  const person1: Person = {
    name: "Subahan",
    address: "Dhaka, Bangladesh",
    hairColor: "Black",
    eyeColor: "Brown",
    income: 50000,
    expense: 30000,
    hobbies: ["Reading", "Cycling"],
    familyMembers: ["Mother", "Father", "Sister"],
    job: "Software Engineer",
    skills: ["JavaScript", "TypeScript", "React"],
    maritalStatus: "single",
    friends: ["Raju", "Subahan", "Nila"],
  };
  console.log(person1);

  // task : 4 Union and Intersection Types
  //Objective: Create union and intersection types using interfaces.

  // Define Book interface
  interface Book {
    title: string;
    author: string;
    pages: number;
  }

  // Define Magazine interface
  interface Magazine {
    title: string;
    publisher: string;
    issueNumber: number;
  }

  // Union type: Either Book or Magazine
  type ReadingMaterial = Book | Magazine;

  // Intersection type: All properties from both Book and Magazine
  type BookMagazine = Book & Magazine;

  // Example using union type
  const item1: ReadingMaterial = {
    title: "Learn TypeScript",
    author: "Max Mustermann",
    pages: 200,
  };

  const item2: ReadingMaterial = {
    title: "Science Weekly",
    publisher: "SciPress",
    issueNumber: 15,
  };

  // Example using intersection type
  const comboItem: BookMagazine = {
    title: "Full Stack Monthly",
    author: "Jane Doe",
    pages: 150,
    publisher: "DevWorld",
    issueNumber: 5,
  };

  // Display function
  function displayItem(item: ReadingMaterial | BookMagazine) {
    console.log("Title:", item.title);
    if ("author" in item) {
      console.log("Author:", item.author);
      console.log("Pages:", item.pages);
    }
    if ("publisher" in item) {
      console.log("Publisher:", item.publisher);
      console.log("Issue Number:", item.issueNumber);
    }
  }

  // Test the function
  displayItem(item1);
  displayItem(item2);
  displayItem(comboItem);

  // task : 5 Write a function that reverses a string.
  //Objective: Write a function that reverses a string.

  const reverseString = (text: string) => {
    return text.split("").reverse().join("");
  };
  const input = "hello";
  const result = reverseString(input);
  console.log(result);

  // Task 6: Spread and Rest Operators, Destructuring
  //  Objective: Write a function that uses the rest operator for variable-length arguments.

  const sumAll = (...numbers: number[]) => {
    return numbers.reduce((total, num) => total + num, 0);
  };
  const modulas = sumAll(10, 20, 30, 40, 50, 60);
  console.log(modulas);

  //Task 7: Type Assertion and Narrowing
  //Objective: Write a function that behaves differently based on the input type.

  const handleInput = (input: "string" | "number"): number => {
    if (typeof input === "string") {
      return input.length;
    } else {
      return input * input;
    }
  };

  const InputResult = handleInput("number");
  console.log(InputResult);

  //Task 8: Intersection Types
  //Objective: Practice using intersection types.

  //define user type
  type User = {
    name: string;
    email: string;
  };
  // define admin type
  type Admin = {
    adminLevel: number;
  };
  //  Create intersection type
  type AdminUser = User & Admin;

  const adminDescribe = (adminUser: AdminUser) => {
    return `Admin Name: ${adminUser.name}, Email: ${adminUser.email}, Level: ${adminUser.adminLevel}`;
  };

  const admin1: AdminUser = {
    name: "Subahan",
    email: "subahanislam523@gmail.com",
    adminLevel: 2,
  };
  console.log(adminDescribe(admin1));

  //Task 9: Optional Chaining
  //Objective: Use optional chaining with nested objects.

  type Employee = {
    name: string;
    address?: {
      country?: string;
      city?: string;
    };
  };
  const SubahanCity = (employee: Employee) => {
    return employee?.address?.city;
  };

  const emp1: Employee = {
    name: "subahan",
    address: {
      country: "Bangladesh",
      city: "Thakurgaon",
    },
  };
  const emp2: Employee = {
    name: "masud",
  };
  console.log(SubahanCity(emp1));
  console.log(SubahanCity(emp2));

  //Task 10: Nullish Coalescing
  //Objective: Handle null and undefined values using nullish coalescing.

  const getDisplayName = (name: string | null | undefined) => {
    return name ?? "Anonimous";
  };
  console.log(getDisplayName(""));
  console.log(getDisplayName(null));
  console.log(getDisplayName(undefined));

  //Task 11: Unknown Type
  //Objective: Handle different types with the unknown type.
  const processData = (data: unknown) => {
    if (typeof data === "string") {
      return data.toUpperCase();
    } else if (typeof data === "number") {
      return data * data;
    } else {
      return undefined;
    }
  };
    console.log(processData("subahan"));
    console.log(processData(5));
    console.log(processData(undefined));

  //Task 12: Never Type
  //Objective: Use the never type for functions that don’t return.

    const handleError = (message: string): never => {
      throw new Error(message);
    };
    console.log(handleError("Something went rong"));

  //Task 13: Generics with Functions and Interfaces
  //Objective: Use generics to handle different types.

  const removeDuplicate = <T>(items: T[]): T[] => {
    return Array.from(new Set(items));
  };
  console.log(removeDuplicate<number>([1, 2, 2, 3, 3, 4]));
  console.log(removeDuplicate<string>(["a", "a", "b", "b"]));

  //Task 15: Type Guards
  //Objective: Create custom type guards for more accurate type checking.

  const isString = (value: unknown): value is string => {
    return typeof value === "string";
  };

  const printToUpercase = (value: unknown): void => {
    if (isString(value)) {
      console.log(value.toUpperCase());
    } else {
      console.log("Value is not a string.");
    }
  };

  console.log(printToUpercase("hello"));

  // Task 16: Utility Types and Keyof Constraints
  //Objective: Access object properties dynamically using keyof.

  const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
  };
  const person = {
    name: "Subahan",
    age: 30,
    isEmployed: true,
    isAdmin : false
  };
  const name = getProperty(person,"name")
  console.log(name)
}
