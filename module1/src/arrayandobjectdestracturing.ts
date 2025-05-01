{
  // object destructuring

  const user = {
    id: 677317,
    name: {
      firstName: "Subahan",
      middleName: "vai",
      lastName: "islam",
    },
    contactNo: "01786727749",
  };
  const {
    contactNo,
    name: { middleName : midName   }, // name alias
  } = user;
  console.log(user);

  // array destructuring

  const myFriends = ["juwel", "imran ", "subahan", "rokon", "sohel", "rokib"];
  const [, , bestFriend , ...rest ] = myFriends;
  console.log(rest)
}
