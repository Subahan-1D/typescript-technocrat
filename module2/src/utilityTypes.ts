{
  // utility type
  // pick
  type Person = {
    name: string;
    email: string;
    contactNo: string;
  };

  type Name = Pick<Person, "contactNo">;
}
