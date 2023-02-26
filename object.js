// let empty={};
// let point ={x:0,y:0};
// let p2={x:point.x, y:point.y};
let book={
    "main title": "JavaScript",
    "sub-title" : "The Definitive Guide",
    for : "all audiences",
    author:{
        firstname: "David",
        surname:"Flanagan"
    }
};
// console.log(book.author);
// let o = new Object();
// let a = new Array();
// let d= new Date();
// let r = new Map();
// console.log(o, a, d ,r);
//
// let o1 = Object.create({x:1,y:2}); // it inherits properties x and y.
// console.log(o1.x+o1.y);
//
// let o2=  Object.create(null);
// console.log(o2);


/*let o = {x:"don't change this value"};
// library.function(Object.create(o));
let author= book.author;
let name= author.surname;
let title=book["main title"];

book.edition=7;
book["main title"]="ECMASCRIPT";
console.log(book)*/

/*
let addr="";
for(let i=0;i<4;i++){
    addr+=customer[`address${i}`] + "\n";
}
*/

function addstock(portfolio,stockname,shares){
    portfolio[stockname]=shares;
}


/*function computerValue(portfolio){
    let total=0.0;
    for(let sock in portfolio){

    }
}
let o={};
o.x=1;
let p =Object.create(o);
p.y=2;
let q = Object.create(p);
q.z=3;
let f=q.toString();
console.log(q.x+q.y);*/
/*
let unitCircle={r:1};
let c =Object.create(unitCircle);
c.x=1;c.y=1;
c.r=2;
console.log(unitCircle.r);
let book= Object.create(null);
let surname= book && book.author && book.author.surnmae;
console.log(surname);
delete book.author;
delete book["main title"]*/

// let o={x:1};
// delete o.x;
// delete o.x;
// delete o.toString();
// delete 1;
// console.log(delete Object.prototype);

/*
let o={x:1};
console.log("x" in o);  // true:  o has an own property "x"
console.log("y" in o);  // false : o doesn't have a property "y"
console.log("toString" in o); // true: o inherits a toString property.
*/

/*
let o={x:1};
console.log(o.hasOwnProperty("x"));
console.log(o.hasOwnProperty("y"));
console.log(o.hasOwnProperty("toString"));
*/

/*let o={x:1};
console.log(o.propertyIsEnumerable("x"));
console.log(o.propertyIsEnumerable("toString"));
console.log(Object.prototype.propertyIsEnumerable("toString"));*/

/*let o={x:1};
console.log(o.x !== undefined); // true :   o has a property x.
console.log(o.y !== undefined);  // false: o doesn't have a property y.
console.log(o.toString !== undefined); // true: o inherits a toString property*/

/*let o = {x:undefined};
console.log(o.x !== undefined);
console.log(o.y !== undefined);
console.log("x" in o);
console.log("y" in o);
console.log(delete o.x);
console.log("x" in o);*/

// let o={x:1,y:2,z:3}; // Three enumerable own properties.
// console.log(o.propertyIsEnumerable("toString")); // false : not enumerable.

/*for(let p in o){  // loop through the properties.
    console.log(p); // Prints x,y, and Z, but not toString.
}*/

/*for( let p in o){
    if(!o.hasOwnProperty(p)) continue; // skip inherited properties.
}

for(let p in o){
    if(typeof o[p] === "function") continue; // skip all methods
}*/

/*
let target={x:1}, source={y:2,z:3};
for( let key of Object.keys(source)){
    console.log(key);
    target[key]=source[key];
}
console.log(target);
*/

/*
function merge(target, ...sources){
    for(let source of sources){
        for(let key of Object.keys(source)){
            if(!(key in target)){
                target[key]=source[key];
            }
        }
    }
    return target;
}

console.log(Object.assign({x:1},{x:2,y:2},{y:3,z:4}));
console.log(merge({x:1},{x:2,y:2}, {y:3,z:4}));
*/
/*let o ={x:1, y:{z:[false,null,""]}};
let s= JSON.stringify(o);
let p =JSON.parse(s);
console.log(s);
console.log(p);*/

/*let point={
    x:1,
    y:2,

    toLocaleString: function () {return `(${this.x.toString()} , ${this.y.toLocaleString()})`}
}
console.log(point.toLocaleString())
console.log(point.toString())*/

// let point ={
//     x:3,
//     y:4,
//     toString: function (){return `(${this.x} , ${this.y})`},
//     // valueOf: function () {return Math.hypot(this.x,this.y);}
// }
//
// console.log(JSON.stringify([point]))

/*let x=1,y=2;
let o={x,y};
console.log(o.x+o.y);*/

/*const PROPERTY="p1";
function computePropertyName(){
    return "p" +2;
}*/
/*let o={};
o[PROPERTY]=1;
o[computePropertyName()]=2;*/

/*let p={
    [PROPERTY]:1,
    [computePropertyName()]:2
}
console.log(p.p1 +p.p2);*/
/*
let square={
    area: function () {return this.side * this.side},
    side: 10
};
console.log(square.area());

*/
/*const  METHOD_NAME="m";
const symbol=Symbol();
let weiredMethods={
    "Method with Spaces"(x) {return x+1;},
    [METHOD_NAME](x){return x+2;},
    [symbol](x){return x +3;}
};
console.log(weiredMethods["Method with Spaces"](1));
console.log(weiredMethods[METHOD_NAME](1));
console.log(weiredMethods[symbol](1));*/

/*let o={
    dataProp:value,
    get accessProp(){return this.dataProp},
    set accessProp(value){this.dataProp=value}
}*/

const serialnum={
    _n:0,
    get next(){return this._n++;},
    set next(n){
        if(n> this._n) this._n=n;
        else throw new Error("serial Number can only be set to a larger value");
    }
};
serialnum.next=10;
console.log(serialnum.next);
console.log(serialnum.next);

