"use strict";
function add(num) {
    return num + 2;
    // return "helloo"
}
function getUpper(val) {
    return val.toUpperCase();
}
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
const getHello = (s) => {
    return "Hello";
};
const heros = ["thor", 'batman', "ironman"];
heros.map((hero) => {
    return (`Hero is ${hero}`);
});
// console.log(getHello("Hi"));
console.log(add(5));
// console.log(getUpper("vishal"));
