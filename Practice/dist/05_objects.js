"use strict";
const User = {
    name: 'vishal',
    email: 'vishal@ts.com',
    isActive: true
};
function createUser(user) {
    return user;
}
console.log(createUser({ name: "Vishal", email: "vishal@v.com", isActive: true }));
let myUser = {
    _id: "1234",
    name: "vishal",
    email: "v@v.com",
    isActive: true
};
myUser.email = "v@gmail.com";
// myUser._id = "111";
