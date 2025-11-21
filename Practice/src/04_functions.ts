function add(num: number):number{
    return num+2;
    // return "helloo"
}

function getUpper(val:string){
    return val.toUpperCase();
}


function getValue(myVal:number){
    if(myVal>5){
        return true;
    }
    return "200 OK";
}

const getHello = (s:string):string=>{
    return "Hello";
}

const heros = ["thor",'batman',"ironman"];
heros.map((hero):string=>{
    return(`Hero is ${hero}`);
})

// console.log(getHello("Hi"));
console.log(add(5));
// console.log(getUpper("vishal"));
