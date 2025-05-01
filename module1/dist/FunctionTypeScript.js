"use strict";
// learning Function
// Normal Function
// Arrow Function
function add(num1, num2) {
    return num1 + num2;
}
console.log("Normal Function Result:", add(2 + 2, 5));
var addArrow = function (num1, num2) { return num1 + num2; };
console.log("Arrow Function Result:", addArrow(2, 4));
// object => function ..> Method
var userName = {
    name: "Subahan",
    balance: 0,
    addBalance: function (balance) {
        return "My Balance is ".concat(this.balance + balance);
    },
};
var total = userName.addBalance(100);
console.log("total balance", total);
var arr = [1, 2, 3, 4, 5];
var newArray = arr.map(function (element) { return element * element; });
console.log("Number is equal ", newArray);
