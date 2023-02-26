/*function printprops(o){
    for(let p in o){
        console.log(`${p}: ${o[p]}\n`);
    }
}
//compute the distance between Cartesian  points (x1,y1) and (x2,y2).
function distance(x1,y1,x2,y2){
    let dx=x2-x1;
    let dy=y2-y1;
    return Math.sqrt(dx *dx + dy* dy);
}
function factorial(n){
    if(x<=1){return 1;}
    return  n* factorial(n-1);
}*/

// function expression.
/*const  square=function (x){return x*x;}
const f=function fact(x){if(x<=1)return 1;else return x *fact(x-1);}

let tensquared=(function (x){return x*x}(10));
console.log(tensquared);*/

// arrow function.
/*const sum= (a,b) =>{ return a+b;};
const compact_sum=(a,b) => a+b;
const polynomial= x => x*x + 2*x +3;
const constantFunc = () => 42;
const f = x => {return {value :x};}; // GOOD: function f returns a value.
const g = x => ({value: x}); // GOOD: function g returns a value.
const h = x => {value : x}; // BAD: returns nothing.
const i = x => {v:x, w:x}; // BAD: syntax error.*/

/*let filtered = [1,null,2,3].filter(x => x!==null);
let squares = [1,2,3,4].map(x => x*x);*/

/*function hypotenous(a,b){
    function square(x){
        return x*x;
    }
    return Math.sqrt(square(a)+square(b));
}*/


/*const strict =(function() {return !this;});
console.log(strict());*/

/*let calculator= {
    operand1:1,
    operand2:1,
    add(){this.result= this.operand1 +this.operand2;}
};
console.log(calculator.add())
console.log(calculator.result);*/

/*
let o={                         //An object o.
    m:function(){              //Method m of the object.
        let self=this;        // save the "this" value in a variable.
        this ===o            // true : this is the object o;
        f();                // Now call the helper function f();
        function  f(){       //  A nested function f.
            this===o        // false: "this"  is global or undefined.
            self ===o      //  true : self is the outer "this" value
        }
    }
};
o.m();                   // Invoke the method m on the object o.
*/

/*function getPropertyName(o,a){
    if( a=== undefined) a=[];
    for(let property in o) {a.push(property)};
    return a;
}

console.log(getPropertyName());
let o ={x:1}, p={y:2,z:3}; // Two objects for testing.
let a=getPropertyName(p,a);
console.log(a)*/

/*function max(first= -Infinity,...rest){
    let maxValue=first;
    for( let n of rest){
        if(n > maxValue){
            maxValue=n;
        }
    }
    return maxValue;
}

console.log(max(1,10,100,2,3,1000,4,5,6));*/

/*let numbers = [5,2,10,-2,9,100,1];
console.log(Math.min(...numbers));*/

//This function takes a function and returns a wrapped version.
/*function timed(f){
    return function(...args){ // collect args into a rest parameter array.
        console.log(`Entering function ${f.name}`);
        let startTime =Date.now();
        try {
            //pass all of oue arguments to the wrapped function.
            return f(...args);
        } finally {
            //Before we return the wrapped return value, print elapsed time.
            console.log(`Exiting ${f.name} after ${Date.now()-startTime}ms` );
        }
    }
}
// compute the sum of the numbers 1 and n by brute force.
function benchmark(n){
    let sum=0;
    for(let i=1;i<=n;i++)sum+=1;
    return sum;
}
// Destructing Function Arguments int parameters.
function  vectorAdd(v1,v2){
    return [v1[0]+v2[1],v1[1] + v2[1]];
}

console.log(vectorAdd([1,2],[3,4]));*/

// multilpy the vector {x,y} by a scalar value.
/*function vectorMultiply({x,y},scalar){
    return {x :x*scalar, y: y*scalar};
}

console.log(vectorMultiply({x:1,y:2},2));*/

/*function vectorAdd(
    {x:x1,y:y1}, // unpacing the 1st object into x1 and y1 params.
    {x:x2,y:y2}  // unpacking the 2nd object into x2 and y2 params.
){
    return {x:x1+x2, y:y1+y2};
}

console.log(vectorAdd({x:1, y:2},{x:3,y:4}));*/

/*function arrayCopy({from, to=from, n=from.length,fromIndex=0,toIndex=0}){
    let valuesToCopy=from.slice(fromIndex,fromIndex+n);
    to.splice(toIndex,0,...valuesToCopy);
    return to;
}
let a =[1,2,3,4,5],b =[9,8,7,6,5];
console.log(arrayCopy({from:a,n:3,to:b,toIndex:4}));*/
/*function f([x,y,...coords],...rest){
    return [x+y, ...rest,...coords];
}

console.log(f([1,2,3,4],5,6,7));*/

/*function vectorMultiply({x,y,z=0,...props},scalar){
    return {x:x*scalar,y:y*scalar,z:z* scalar, ...props};
}

console.log(vectorMultiply({x:1,y:2,w:-1},4));*/

/*function sum(a){
    let total=0;
    for(let element of a){
        if(typeof element !=="number"){
            throw  new TypeError("Elements must bbe numbers.")
        }
        total +=element;
    }
    return total;
}

console.log(sum([1,2,3])); //=> 6
console.log(sum(1,2,3)); //!TypeError: 1 is not iterable
console.log([1,2,"3"]); //!TypeError : element 2 is not a number*/


/*const operators={
    add:(x,y) => x+y,
    subtract: (x,y) => x-y,
    multiply: (x,y) =>x *y,
    divide: (x,y)  => x/y,
    pow :(x,y)=> Math.pow(x,y)
};

function operate2(operation,operand1,operand2){
    if(typeof operators[operation] === "function"){
        return operators[operation](operand1,operand2);
    }else throw "unknown operator";
}

console.log(operate2("add",1,3));
console.log(operate2("pow", 10,2));*/

/*uniqueInteger.counter=0;
function uniqueInteger(){
    return uniqueInteger().counter++;
}

console.log(uniqueInteger());
console.log(uniqueInteger());*/

/*let uniqueInteger= (function(){
    let counter =0;
    return function (){ return counter++;}
}());
console.log(uniqueInteger());
console.log(uniqueInteger());*/
/*function counter(){
    let n=0;
    return {
        count: function () { return n++;},
        reset: function (){n=0;}
    }
}
let c =counter(),d =counter();
console.log(c.count());
console.log(c.count());
console.log(d);*/

/*function counter(n){
    return {
        get count(){return n++;},
        set count(m){
            if(m >n) n=m;
            else throw Error("count can only be set to a larger value.");
        }
    };
}
let c= counter(1000);
console.log(c);
c.count=200;
console.log(c.count)*/

/*function addPrivateProperty(o,name,predicate){
    let value; // This is the property value.
    // The getter method simply returns the value.
    o[`get${name}`]=function (){return value;};
    //The setter method stores the value or throws an exception if the predicate rejects the value;
    o[`set${name}`]=function (v) {
        if(predicate && !predicate(v)){
            throw  new TypeError(`set${name}: invalid value ${v}`);
        }else{
            value=v;
        }
    }
}

let o={};
addPrivateProperty(o,"Name",x=> typeof x ==="string");
console.log(o.setName("Frank"));
console.log(o.getName());
console.log(o.setName(0));*/

/*
function constfunc(v) {
    return () =>v;
}
let funcs=[];
for(let i=0;i<10;i++){
    funcs[i]=constfunc(i);
}

console.log(funcs[5]());
*/

/*
function constfuncs() {
    let funcs=[];
    for(var i=0;i<10;i++){
        funcs[i]=()=> i;
    }
    return funcs;
}
let funcs=constfuncs();
console.log(funcs[5]())
*/
/*function f(y){return this.x +y;} //This function needs to be bound.
let o= {x:1};  // An object we will bind to.
let g = f.bind(o); //calling g(x)  invokes f() on o.
console.log(g(2)); // =>3.
let p ={x:10,g}; // Invoke g(0 as a method of this object.
console.log(p.g(2));   // => 3: g is still bound to o, not p.*/

/*let sum=(x,y) => x+y; // return the sum of two argument.
let succ=sum.bind(null,1);  //Bind the first argument to 1.
console.log(succ(2)); // 3: x is bound to 1, and we pass 2 for the y argument.

function f(y, z) {
    return this.x +y+z;
}
let g =f.bind({x:1},2); // bind this and y.
console.log(g(3));*/
// High order function.
/*function not(f){
    return function (...args) {           //Return a new function.
        let result=f.apply(this,args);   //that calls f.
        return !result;                 // and negates its result.
    };
}

const even = x => x %2 === 0; // A function to determine if a number is even.
const odd= not(even);   // A new function that does the opposite.
console.log([1,1,3,5,5].every(odd));  // => true: every element of the array is odd.*/

/*
function mapper(f) {
    return a => Map(a,f);
}
const increment = x => x +1;
const  incrementAl= mapper(increment);
console.log(incrementAl([1,2,3]));

*/

/*function compose(f, g) {
    return function (...args){
        return f.call(this,g.apply(this,args));
    };
}
const sum=(x,y)=> x+y;
const square= x => x*x;
console.log(compose(square, sum)(2,3));*/

// The arguments to this function are passed on the left.
function partialLeft(f, ...outerArgs){
    return function (...innerArgs){
        let args=[...outerArgs,...innerArgs];
        return f.apply(this,args);
    };
}

// The arguments to this function are passed on the right.
function partialRight(f, ...outerArgs){
    return function (...innerArgs) {
        let args=[...innerArgs,...outerArgs];
        return f.apply(this,args);
    };
};












































