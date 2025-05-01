"use strict";
{
    // spread operator and
    // destructuring
    // rest operator
    // learn spread operator
    var bros1 = ["masud", "rasel", "juwel"];
    var bros2 = ["imran", "subahan", "sobuj", "Suborna"];
    bros1.push.apply(bros1, bros2);
    console.log(bros1);
}
var student = {
    name: "subahan",
    roll: 677317,
    student: true,
};
var student1 = {
    name: "juwel",
    roll: 602715,
    student: false,
};
var studentList = [student, student1];
console.log(studentList);
var newStudentList = studentList.push(student1);
console.log(newStudentList);
// learn rest operator
var greetFriends = function () {
    var friends = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        friends[_i] = arguments[_i];
    }
    friends.forEach(function (friend) { return console.log("Hi ".concat(friend)); });
};
greetFriends("masud ", "juwel", "subahan", "Mezba");
