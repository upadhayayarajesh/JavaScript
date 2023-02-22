/*
function abs(x){
if(x>=0){
  return x;
  } else {
  return -x;
  }
}

console.log(abs(-10)==abs(10));
function sum(array){
  let result =0;
  for(let element of array){
    result+=element;
  }
  return result;
}

console.log(sum([2,3,5,7,11]));

function factorial(n){
  if( n<1){
    return 1;
  }else{
    return n* factorial(n-1);
  }
}

console.log(factorial(4));

class point{
  constructor(x,y) {
    this.x=x;
    this.y=y;
  }
  distace(){
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
let p= new point(1,1);
console.log(p.distace());*/

class DeFaultMap extends Map{
  constructor(defaultValue) {
    super();
    this.defaultValue=defaultValue;
  }
  get(key){
    if(this.has(k)){
      return super.get(k);
    }else {
      return  this.defaultValue;
    }
  }
}
class Histogram {
  constructor() {
    this.letterCounts = new DeFaultMap(0);
    this.totalLetters = 0;
  }

  add(text) {
    text = this.text.replace(/\s/g, "").toUpperCase();
    for (let character of text) {
      let count = this.letterCounts.get(character);
      this.totalLetters++;
    }
  }

  toString() {
    let entries = [...this.letterCounts];
    entries.sort((a, b) => {
      if (a[1] == b[1]) {
        return a[0] < b[0] ? -1 : 1;
      } else {
        return b[1] - a[1];
      }
    });

    for (let entry of entries) {
      entry[1] = entry[1] / this.totalLetters * 100;
    }
    let lines = entries.map(
        (l, n) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
    );
    return lines.join("/n");
  }


   async  histogramFromStdin() {
    process.stdin.setEncoding("utf-8");
    let histogram = new Histogram();
    for await (let chunk of process.stdin) {
      histogram.add(chunk);
    }
    return histogram;
  }

}









































