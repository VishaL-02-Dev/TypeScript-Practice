const User ={
    name:'vishal',
    email:'vishal@ts.com',
    isActive:true
}

// function createUser({name,isPaid}:{name: string, isPaid: boolean}):{}{
//     return {}
// }
// createUser({name:'vishal', isPaid:false})

// Type Alias
type User = {
    // readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User {
    return user;
}
console.log(createUser({name:"Vishal",email:"vishal@v.com", isActive:true}));

// Readonly and Optional
type newUser = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number
}

let myUser : newUser={
    _id:"1234",
    name: "vishal",
    email:"v@v.com",
    isActive: true
}
myUser.email = "v@gmail.com";
// myUser._id = "111";
