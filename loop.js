// let number=0;
// while(number <=12){
//     console.log(number);
//     number = number +2;
// }
//two variable to keep track of the looping and the result.
// let result=1;
// let counter= 0;
// while( counter < 10) {
//     result =result *2;
//     counter= counter +1;
// }
// console.log(result);
// a do loop is a control structure similar to a while loop. It only differs on one point: a do loop always executes
// its body  at least once, and it starts testing whether it should stop after that first execution. To reflect this,
// the test appears after the body of the loop.
    //  let yourName;
//  do{
//      yourName = prompt("who are you ?");
//  } while (!yourName);
//  console.log(yourName);
// if(false!=true) {
//     console.log("That makes sense.");
//     if(1<2){
//         console.log("No surprise there.")
//     }
// }
// for(let num=0; num <=12; num=num +2){
//     console.log(num);
// }
// let num =0;
// while(num <=12){
//     console.log(num);
//     num+=2;
// }

// let result=1;
// for(let counter=0; counter <10;counter+=1){
//     result =result *2;
// }
// console.log(result);
// for(let current=20;;current+=1){
//     if(current % 7==0){
//         console.log(current);
//         break;
//     }
// }

// for(let number=0; number <=12; number++){
//     console.log(number);
// }

// let x =`value3`;
// if(x== "value1") action1();
// else if (x =="value2") action2();
// else if (x =="value3") action3();
// else defaultAction();

// commenting
/* for the
block
of the code or multi line comment.
 */
/* conditional statement (if , else and switch.) and  looping (while, do, and for ) statements. */
/* an expression is what that produce a value. */
// let hash="#";
// while(hash.length<8){
//     console.log(hash);
//     hash+="#";
// }

/* FizzBuzz program 8/
// for(let i=1 ;i<100; i++){
//     if( i%3 ==0 && i%5==0){
//       console.log("FizzBuzz " + i)
//     } else if(i%3==0){
//         console.log("Fizz" + i);
//     } else if (i%5==0) {
//         console.log("Buzz" + i);
//     }
// }
*/


// let height= 8;
// let width =4;
// let hash = "";
// console.log("test");
// while(width>0)
// {hash += "# ";
//     width--;};
// for(let i=0; i<height; i++){
//     if(i%2==0){
//         console.log( " "+hash);
//     }else {
//         console.log(hash+ " ");
//     }
// }

/* Function in the js */
// const square =function(x) {
//     return x *x;
// };
// console.log(square(12));


// const makeNoise= function (){
//     console.log("Pling!");
// };
// makeNoise();
//
// const power= function (base,exponent){
//     let result=1;
//     for(let count=0; count <exponent;count++){
//         result *=base;
//     }
//     return result;
// }
// console.log(power(2,10));

/* local binding are variable that are defined inside the function and global binding are binding that are defined
 inside the class and are accessible inside  that class.*/

// let x =10;
// if(true) {
//     let y=20;
//     var z=30;
//     console.log(x +y+z);
// }
// console.log(x+z);

/*const halve= function(n){
    return n/2;
};
let n=10;
console.log(halve(100));
console.log(n);
*/

/*
const hummus=function(factor){
    const ingredient=function(amount,unit,name){
        let ingredientAmount= amount * factor;
        if(ingredientAmount >1){
            unit +="s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1,"can" , "chickPeas");
    ingredient(0.25,"cup","tahini");
    ingredient(0.25,"cup","lemon juice");
    ingredient(1,"clove", "garlic");
    ingredient(2,"tablespoon","olive oil");
    ingredient(0.5,"teaspoon","cumin");
};

hummus(10);
*/

/*
function square(x){
    return x* x;
}
*/
/* this is a function declaration. the statement defines the binding square and points it at the given function.
It is slightly easier to write and doesn't require a semicolon after the function.
 */
// console.log("The future says: ", future());
// function future(){
//     return "You'll never have flying cars.";
// }
/* Arrow function */
const power =(base, exponent)=>{
    let result=1;
    for(let count=0; count <exponent; count++){
        result *=base;
    }
    return result;
} ;
const func= function (){console.log("Hello World");};
function  func2(){console.log("Hello World.")}
const func3=(x,y) =>{return x+y;}

const square1=(x) =>{return x*x; };
const square2=x=>x *x;
const horn =() => {console.log("Toot");};











