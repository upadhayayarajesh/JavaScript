// let greet=(who)=> {
//     console.log("Hello " + who);
// }
// greet("Harry");
// console.log("Bye");

// function chicken(){
//     return egg();
// }
// function egg(){
//     return chicken();
// }
//
// console.log(chicken() + "came first.");

// js ignores other parameter.
// let square=(x)=> {return x*x;}
// console.log(square(4,true,"hedgeHod"));

// it can alos take less than the given parameter and act accordingly.
// let minus=(a,b)=>{
//     if(b==undefined){return -a;}
//     else return a-b;
// };
// console.log(minus(10));
// console.log(minus(10,5));

/* If you write an = operator after a parameter, followed by an expression, the
value of that expression will replace the argument when it is not given */

// function power(base,exponent=2){
//     let result=1;
//     for(let count=0; count<exponent;count++){
//         result *=exponent;
//     }
//     return result;
// }
//
// console.log(power(4));
// console.log(power(2,6));

// function wrapValue(n){
//     let local =n;
//     return ()=> local;
// }
// let wrap1=wrapValue(1);
// let wrap2= wrapValue(2);
// console.log(wrap1());
// console.log(wrap2());

// function multiplier(factor) {
//     return number=> number *factor;
// }
//
//
// let twice =multiplier(2);
// console.log(twice(5));

// let power=(base,exponent)=>{
//     if(exponent==0){
//         return 1;
//     }
//     return base *power(base,exponent-1);
// }
// console.log(power(2,3))

// function findSolution(target){
//     function find(current, history){
//         if(current==target){
//             return history;
//         } else if(current >target){
//             return null;
//         }else {
//             return  find(current +5,`(${history} +5)` ) ||
//                 find(current *3, `(${history} *3)`);
//         }
//     }
//     return find(1,"1");
// }
// console.log(findSolution(24));
// // (((1*3) +5)*3)


// The function keyword, when used as an expression, can create a function value. When used as
// a statement, it can be used to declare a binding and give it a function as its
// value. Arrow functions are yet another way to create functions.
// Define f to hold a function value
//     const f = function(a) {
//     console.log(a + 2);
// };
// // Declare g to be a function
// function g(a, b) {
//     return a * b * 3.5;
// }
// // A less verbose function value
// let h = a => a % 3;

// function isEven(N){
//     if (N==0){
//         return  true;
//     }else if (N==1){
//         return false;
//     }else{
//         isEven(N-2);
//     }
// };
// let N =-1
// if(isEven(N)){
//     console.log("True")
// }else if (!isEven(N)){
//     console.log("False")
// }

// function countBs(word,countChar){
//     let result=0;
//     for(let i=0;i<word.length;i++){
//         if(word[i]==countChar){
//             result++;
//         }
//     }
//     return result;
// }
//
// console.log(countBs("djfvhbfgbB",`R`))


//
// let listOfNumbers =[2,3,5,7,11];
// console.log(listOfNumbers[2]);
// console.log(listOfNumbers[0]);
// console.log(listOfNumbers[2-1]);
