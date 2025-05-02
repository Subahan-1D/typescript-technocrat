"use strict";
{
    //Ternary, optional chaining & nullish coalescing operator
    var age = 18;
    if (age >= 18) {
        console.log("Adalt");
    }
    else {
        console.log("Not Adalt");
    }
    // ternary operator
    var isAdalt = age >= 18 ? "Votar" : "Not a Votar";
    console.log({ isAdalt: isAdalt });
}
