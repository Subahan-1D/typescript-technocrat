{
  // type gurad using type of in

  // type of -->  type gurad

  type AlphaNumeric = number | string;
  const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    // type of operator er type guard
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add("2", "3");
  const result2 = add(4, 5);
  console.log(result1, result2);

  //type in gurad

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} or My role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Md.Juwel Vai",
  };
  const adminUser: AdminUser = {
    name: "Md.Subahan Vai",
    role: "admin",
  };

  getUser(adminUser)
  //
}
