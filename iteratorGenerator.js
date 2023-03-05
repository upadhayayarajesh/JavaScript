/*
let sum= 0;
for(let i of [1,2,3]){
    sum+=i;
}
console.log(sum);*/

/*let chars=[..."abcd"];
console.log(chars)
let data =[1,2,3,4];

console.log(...data)
console.log(Math.max(...data))*/
/*let purpleHaze=  new Uint8Array(255,0,255,128);
console.log(purpleHaze)
let [r,g,b,a]=purpleHaze;
console.log(r,g,b,a)*/

/*let m= new Map([["one",1],["two",2]]);
for(let [k,v] of m) console.log(k,v);
console.log([...m]);
console.log([...m].entries());
console.log([...m].keys());
console.log([...m].values());*/
// console.log(new Set("abc"));
/*
let iterable=[99];
let iterator=iterable[Symbol.iterator]();
console.log(iterator)
for(let result =iterator.next();!result.done;result=iterator.next()){
    console.log(result.value);
    console.log(typeof result)
}
*/

/*let list=[1,2,3,4,5];
let iter=list[Symbol.iterator]();
console.log(iter);
console.log(list);
let head=iter.next().value;
console.log(head);
let tail=[...iter];
console.log(tail);*/

// Inorder to make a class iterable, you need to implement  a method whose name is Symbol.iterator. This method must return
// iterator object that has a next() method.And the next() method must return  an iteration result object that has a value property and/ or
// a boolean type.

/*class Range{
    constructor(from,to) {
        this.from=from;
        this.to=to;
    }
//      make a Range act like a Set of Numbers.
    has(x){ return typeof x ==="number" && x>=this.from && x<=this.to;}
    /!*
  Making a Range class iterable by returning a iterator object
  * Note that the name of the method is special symbol, not a string.
  *!/
    [Symbol.iterator](){
        /!*
        * Each iterator instance must iterate the range independently of others.
        * so we need a state variable to track our location in the iteration. we start at
        * first integer >= from.
        * *!/
        let next=Math.ceil(this.from); // This is the next value we return.
        let last=this.to;              // We won't return anything > this.
        return { //This is the iterator object.
            //The next() methods is what makes this an iterator object.
            //It must return an iterator result object.
            next() {
                return (next <= last) // If we haven't returned last value yet
                    ? {value: next++} //return next value and increment it.
                    : {done: true}; //otherwise indicate that we're done.
            },
            //     As a convenience, we make the iterator itself iterable.
            [Symbol.iterator]() {
                return this;
            }
        }
    }
//     return String representation of the range using set notation.
    toString(){return `x/ ${this.from} <=x>= ${this.to}`;}

}*/
/*for(let x of new Range(1,10)) console.log(x);
console.log([... new Range(-2,2)]);*/

/*
*Return an iterable object that iterates that result of applying f()
* to each value from the source iterable.
* */
/*function map(iterable,f){
    let iterator=iterable[Symbol.iterator]();
    return { // This object is both iterator and iterable.
        [Symbol.iterator](){ return this;},
        next(){
            let v=iterator.next();
            if(v.done){
                return v;
            }else{
                return {value: f(v.value)};
            }
        }

    };
}*/
// Map a range of integers to their squares and convert to an array.
/*
console.log([...map(new Range(1,4),x =>x *x)]);
*/

/*
* Return an iterable object that filters the specified iterable,
* iterating only those elements for which the predicate returns true.
* */
/*
function filter(iterable, predicate) {
    let iterator=iterable[Symbol.iterator]();
    return{
        [Symbol.iterator](){return this;},
        next(){
            for(;;){
                let v =iterator.next();
                if(v.done || predicate(v.value)){
                    return v;
                }
            }
        }
    };
}

// Filter a range so we're left wiht only even numbers.
console.log([...filter(new Range(1,10), x=> x % 2===0 )]);
*/

/*function words(s){
    var r=/\s+|$/g; // match one or more spaces or end.
    r.lastIndex=s.match(/[^]/).index; //start matching at first nonspace.
    return{ // retrun an iterable iterator object.
        [Symbol.iterator](){return this;}, // this makes us iterable.
        next(){     //This makes us iterable.
            let start= r.lastIndex; // Resume where the last match ended.
            if(start < s.length){ // if we're not done.
                let match=r.exec(s); // Match the next word boundary.
                if(match){ //if we found one return the word.
                    return {value: s.substring(start,match.index)};
                }
            }
            return {done:true}; //otherwise ,say that we're done.
        }
    };

}

console.log([...words("abc def ghi! ")]);*/

 /*
 * A generator function that yields the set of one digit (base-10) primes.
 * */

/*
function* OneDigitPrimes(){ // Invoking this function does not run the code.
    yield 2;                // but just returns a generator object. Calling
    yield 3;                // the next() method of that generator runs.
    yield 5;                // the code until a yield statement provides.
    yield 7;                // the return value for the next() method.
}

/!* When we invoke the generator function, we get a generator.*!/
let primes= OneDigitPrimes();

/!*A generator is an iterator object that iterates the yielded values.*!/
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().done);

//Generators have a Sysmbol.iterator methods to make them iterable.
console.log(primes[Symbol.iterator]())

/!*We can use generators like other iterable types.*!/
console.log([...OneDigitPrimes()]);
let sum=0;
for(let prime of OneDigitPrimes()) sum+=prime;
console.log(sum);

const seq=function* (from,to){for (let i=from;i<to;i++)yield i;}
console.log([...seq(3,5)]);

let o={
    x:1,y:2,z:3,
//     A generator that yields each of the keys of this object.
    *g(){
        for(let key of Object.keys(this)){
            yield key;
        }
    }
};
console.log([...o.g()]);

function* fibonacciSquence(){
    let x=0, y=1;
    for(;;){
        yield y;
        [x,y]=[y,x+y]; //Note: destructing assignment.
    }
}
// Return the nth Fibonacci number.
function fibonacci(n){
    for(let f of fibonacciSquence()){
        if(n--<=0){
            return f;
        }
    }
}

console.log(fibonacci(5));

// Yield the first n elements of the specified iterable object.
function* take(n,iterable){
    let it= iterable[Symbol.iterator](); //Get iterator for iterable object.
    while(n-- >0){  //Loop
        let next=it.next(); //Get the next item from the iterator.
        if(next.done) return; // If there are no  more value, return early.
        else yield next.value; // otherwise, yield the value.
    }
}
// An array of the first 5 fibonacci numbers
console.log([...take(5,fibonacciSquence())])
*/

// Given an array of iterables,yield their elements in interleaved order.
/*
function* zip(...iterables){
    //Get an iterator for each iterable
    let iterators=iterables.map(i =>i[Symbol.iterator]());
    let index=0;
    while (iterables.length>0){ // while there are still some iterators.
        if(index >=iterables.length){ //if we reached the last iterator
            index=0;                  // go back ot the first one.
        }
        let item= iterators[index].next(); //Get next item from next iterator.
        console.log(item)
        if(item.done){   //If that iterator is done.
            iterators.splice(index,1); // then remove it from the array.
        }else{
            yield item.value;
            index++;
        }
    }
}

console.log([...zip(OneDigitPrimes(),"ab",[0])]);
*/
/*function* OneDigitPrimes(){ // Invoking this function does not run the code.
    yield 2;                // but just returns a generator object. Calling
    yield 3;                // the next() method of that generator runs.
    yield 5;                // the code until a yield statement provides.
    yield 7;                // the return value for the next() method.
}
function* sequence(...iterables){
    for(let iterable of iterables){
        for(let item of iterable){
            yield item;
        }
    }
}

console.log(...sequence("abc",OneDigitPrimes()))*/

/*
function *oneAndDone(){
    yield 1;
    return "done";
}

//The return value does not appear in normal iteration.
console.log([...oneAndDone()]);

// But it is available if you explicitly call next()
let generator=oneAndDone();
console.log(generator.next());
console.log(generator.next());
*/

function* smallNumbers(){
    console.log("next() invoked the first time; argument discarded");
    let y1=yield 1; // y1==b;
    console.log("next() invoked a second time with argument", y1);
    let y2= yield 2;
    console.log("next() invoked third time with argument", y2);
    let y3=yield 3;
    console.log("next() invoked fourth time with argument", y3);
    return 4;
}
let g=smallNumbers();
console.log("generator created; no code runs yet");
let n1= g.next("a"); //n1.value==1
console.log("generator yielded", n1.value);
let n2=g.next("b");
console.log("generator yielded", n2.value);
let n3=g.next("c")
console.log("generator yielded", n3.value);
let n4=g.next("d");
console.log("generator yielded", n4.value);

















