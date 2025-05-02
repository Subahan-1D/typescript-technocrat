"use strict";
{
    // type assertion
    var anything = void 0;
    anything = "Next Level WebDevelopment";
    (anything = 333), anything;
    var kgToGm = function (value) {
        if (typeof value === "string") {
            var convertedValue = parseFloat(value) * 1000;
            return "The converted value is : ".concat(convertedValue);
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    var result1 = kgToGm(1000);
    var result2 = kgToGm("1000");
    console.log(result2);
}
