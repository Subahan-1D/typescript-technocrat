"use strict";
{
    // object destructuring
    var user_1 = {
        id: 677317,
        name: {
            firstName: "Subahan",
            middleName: "vai",
            lastName: "islam",
        },
        contactNo: "01786727749",
    };
    var contactNo = user_1.contactNo, middleName = user_1.name.middleName;
    console.log(user_1);
    // array destructuring
    var myFriends = ["juwel", "imran ", "subahan", "rokon", "sohel", "rokib"];
    var bestFriend = myFriends[2], rest = myFriends.slice(3);
    console.log(rest);
}
