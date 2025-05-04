"use strict";
{
    //
    // Function With Generic
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res2 = createArrayWithGeneric(true);
    const res3 = createArrayWithGeneric("Bangladesh");
    const res1 = createArray("Bangladesh");
    ;
    const res4 = createArrayWithGeneric({
        id: 44,
        name: "subahan",
        admin: true,
    });
    console.log(res4);
    //
}
