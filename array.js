/*let empty=[]; //an array with no elements.
let primes=[2,3,5,7,11]; //an array with 5 numberic elements.
let misc =[1.1,true,"a",] // 3 element of various types + trailing comma.*/
// console.log(empty, primes, misc);

// /*let base=1024;
// let table=[base,base+1,base+2];

/*let b=[[1,{x:1,y:2}],[2,{x:3,y:4}]];
let count = [1,,3];
let undefs=[,,];
console.log(count.length);
console.log(undefs.length);*!/*/

/*let a=[1,2,3];
let b=[0,...a,4];
console.log(b);*/

/*
let original = [1,2,3];
let copy=[...original];
copy[0]=0;
console.log(copy[0]);
console.log(original[0]);
*/

/*let digits=[..."0123456789ABCDEF"];
console.log(digits.length);*/

/*let letters=[..."hello world"];
console.log(String([...new Set(letters)]));

let a = new Array(10);
console.log(a.toString())*/

/*let a =new Array(5,4,3,2,1,..."testing, testing");
console.log(a)*/

/*
console.log(Array.of());
console.log(Array.of(10));
console.log(Array.of(1,2,3));
*/

/*let copy=Array.from(a);
console.log(copy);
let truearray= Array.from(a)*/

/*let a=["world"];
let value=a[0];
console.log(value);
a[1]=3.14;
let i =2;
a[i]=3;
a[i+1]= "hello";
console.log(a);
a[a[i]]=a[0];
console.log(a);
a[-1.23]=true;
console.log(a);
a["1000"]=0;
a[1.000]=1;
console.log(a);*/

// Sparse Arrays.

// let letters=[..."Hello world"];
/*let string="";
for(let letter of letters){
    string+=letter;
}
console.log(string);*/

/*let everybody="";
for (let [index,letter] of letters.entries()){
    if(index %2 ===0) everybody+=letter;
}
console.log(everybody);

let uppercase="";
letters.forEach(letter =>{
    uppercase +=letter.toUpperCase();
});
console.log(uppercase);

 let vowels="";
 for(let [index,letter] of letters.entries()){
     if(/[aeiou]/.test(letter)){
         vowels+=letter;
     }
 }
console.log(vowels); */

/*
let data=[1,2,3,4,5], sum=0;
data.forEach(value => {sum+=value;});
console.log(data);
data.forEach(function (v,i,a){a[i]= v=1;});
console.log(data);
*/

/*
let a =[1,2,3];
console.log(a.map(x => x*x));
console.log(a);
*/

/*let a =[5,4,3,2,1];
console.log(a.filter(x => x<3 )); // [2,1]; values less than 3.
console.log(a.filter((x,i) => i%2 ===0));
a =a.filter(x => x !==undefined && x !== 4);
console.log(a);*/


/*let a =[1,2,3,4,5];
console.log(a.findIndex(x => x ===3));
console.log(a.findIndex(x => x <0));
console.log(a.find(x =>x %1 ===0));
console.log(a.find(x =>  x %7 ===0));*/

/*let a =[1,2,3,4,5];
console.log(a.every(x => x <10));
console.log(a.every(x => x %2 ===0));
console.log(a.some(x=>x %2 ===0));
console.log(a.some(isNaN));*/

/*let a =[1,2,3,4,5];
console.log(a.reduce((x,y)=>x +y));
console.log(a.reduce((x,y) =>x *y,1));
console.log(a.reduce((x,y)=>(x>y) ? x :y));*/

/*let a =[2,3,4];
console.log(a.reduceRight((acc,val)=> Math.pow(val,acc)));*/

/*console.log([1,[2,3]].flat());
console.log([1,[2,[3]]].flat());*/

/*let a =[1,[2,[3,[4]]]];
console.log(a)
console.log(a.flat(1));
console.log(a.flat(2));
console.log(a.flat(4));*/

/*let phrases=[" hello", "the definitive guide"];
let words= phrases.flatMap(phrases => phrases.split(" "));
console.log(words);
console.log([-2,-1,1,2].flatMap(x => x <0 ? [] :Math.sqrt(x)));*/

/*let a =[1,2,3];
console.log(a.concat(4,5));
console.log(a.concat([4,5],[6,7]));
console.log(a.concat(4,[5,[6,7]]));*/

// let stack =[];
// console.log(stack.push(1,2));
// console.log(stack.pop());
// console.log(stack.push(3));
// console.log(stack.pop());
// console.log(stack.push([4,5]));
// console.log(stack.pop());
// console.log(stack.pop());

/*let q=[];
q.push(1,2);
q.shift();
console.log(q.push(3));
console.log(q);
q.shift();
console.log(q.shift());*/


/*let a =[];
//
a=[];
console.log(a.unshift(1,2));
console.log(a)*/

/*let a =[1,2,3,4,5];
console.log(a.slice(0,3));
console.log(a.slice(3));
console.log(a.slice(1,-1));
console.log(a.slice(-3,-2));*/

/*let a =[1,2,3,4,5,6,7,8];
console.log(a.splice(4));
console.log(a.splice(1,2));
console.log(a.splice(1,1));
console.log(a);*/

/*let a =[1,2,3,4,5];
a.splice(2,0,"a","b");
a.splice(2,2,[1,2],3);
console.log(a);*/

/*let a = new Array(5);
console.log(a.fill(0));
console.log(a.fill(9,1));
console.log(a.fill(8,2,-1));
console.log(a);*/
/*let a =[1,2,3,4,5];
console.log(a.copyWithin(2));
console.log(a.copyWithin(2,3,5));
console.log(a.copyWithin(0,-2));*/
/*let a={};
let i=0;
while (i<10){
    a[i]=i *i;
    i++;
}
a.length=i;
console.log(a);
console.log(typeof a);
let total=0;
for(j=0;j<a.length;j++){
    total+=a[j];
    console.log(total)
}*/

/*function isArrayLike(o){
    if( o &&
        typeof o ==="object" &&
        Number.isFinite(o.length) &&
        o.length >=0 &&
        Number.isInteger(o.length) &&
        o.length <4294967295){
        return true;
    }  else{
        return false;
    }
}*/

let a ={"0": "a", "1":"b", "2":"c", length:3}; //An array-like object.
Array.prototype.join.call(a,"+");
Array.prototype.map.call(a,x=> x.toUpperCase());
Array.prototype.slice.call(a,0);
console.log(Array.from(a));







