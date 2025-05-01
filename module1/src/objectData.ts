// Reference type ---> Object

const user: {
  firstName: string;
  lastName: string;
  readonly company: string; // type -> literal types
  isMarried: boolean;
  ageName?: string; // optional type
} = {
  firstName: "Subahan",
  lastName: "Ali",
  company: "Bangladesh",
  isMarried: false,
};