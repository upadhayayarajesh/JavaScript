/*
class Complex{
    constructor(real,imaginary){
        this.r=real;
        this.i=imaginary;
    }
    plus(that){
        return  new Complex(this.r+that.r,this.i+that.i);
    }
    static sum(c,d){
        return c.plus(d);
    }
    get real(){return this.r};
    get imaginary(){ return this.i};
    toString(){
        return `{${this.r}, ${this.i}}`;
    }
    equals(that){return that instanceof Complex && this.r === that.r && this.i === that.i;}
     static ZERO= new Complex(0,0);
}
Complex.ONE= new  Complex(1,1);
console.log(Complex.ONE.toString())
let c = new Complex(2,3);
let d= new Complex(c.i,c.r);
console.log(c.plus(d).toString());
console.log(Complex.ZERO.toString())*/

/*class EZArray  extends  Array{
    get first(){return this[0]};
    get last(){return this[-1]};
}
let a = new EZArray();
console.log(a instanceof EZArray);
console.log(a.push(1,2,3,4));
console.log(a.pop());
console.log(a.first);
console.log(a.last);
console.log(a[1]);
console.log(Array.isArray(a));
console.log(EZArray.isArray(a));*/

/*class TypedMap extends Map{
    constructor(keyType,valueType,entries) {
        // if entries are specified, check their types.
        if(entries){
            for(let [k,v] in entries){
                if(typeof k !== keyType && typeof v!==valueType){
                    throw  new TypeError(`Wrong  type for entry [${k}, ${v}]`);
                }
            }
        }
        // Initialize the superclass with the (type-checked initial entries.
        super(entries);
        this.keyType=keyType;
        this.valueType=valueType;
    }
    // Now redefined the set() method to add type checking for any new entries added to the map.
    set (key,value){
    //     throw an error if the key or value are of the wrong type.
        if(this.keyType!==key){
            throw new TypeError(`${key} is not type of ${this.keyType}`);
        }
        if(this.valueType !==value){
            throw new TypeError(`${value} is not type of ${this.valueType}` );
        }

        return super.set(key,value);
    }
}*/

/*class Histogram{
    constructor() {
        this.map= new Map();
    }
    //for any given key, the count is the value in the map, or zero.
    //if the key does not appear in the map.
    count(key){
        return this.map.get(key) || 0;
    }
    has(key){
        return this.count(key)> 0;
    }
    size(){
        return this.map.size;
    }
    add(key){
        this.map.set(key,this.count(key)+1);
    }
    delete(key){
        let count =this.count(key);
        if(count===1){
            this.map.delete(key);
        } else if(count>1)
        return this.map.set(key,count-1);
    }
    [Symbol.iterator](){
        return this.map.keys();
    }
    keys(){ return this.map.keys();}
    values(){this.map.values();}
    entries(){return this.map.entries()};
}*/

class AbstractSet {
    //Throw an error here so that subclasses are forced
    // to define their own working version of this method.
    has(x){throw new Error(`Abstract method error.`)}
}
class NotSet extends AbstractSet{
    constructor(set) {
        super();
        this.set=set;
    }
    has(x){return !this.set.has(x);}
    toString(){
        return ` x is x not equals ${this.set.toString()}`
    }
}
class RangeSet extends AbstractSet{
    constructor(from,to) {
        super();
        this.from=from;
        this.to=to;
    }
    has(x){return x >= this.from && x <=this.to; }

    toString(){ return `{x } x ${this.from} < x <${this.to}`;}
}

class AbstractEnumerableSet extends AbstractSet{
    get size(){throw new Error(" Abstract method.");}

    [Symbol.iterator](){ throw  new Error("Abstract method.");}

    isEmpty(){ return this.size===0;}

    toString(){ return `{${Array.from(this).join(",")}}`;}
    equals(set){
        if(!(set instanceof  AbstractEnumerableSet)) return false;

        if(this.size !==set.size)return false;

        for(let element of this){
            if(!set.has(element)) return  false;
        }
        return  true;

    }
}

class SingleSet extends AbstractEnumerableSet{
    constructor(member) {
        super();
        this.member=member;
    }
    has(x){
        return x === this.member;
    }
    get size(){return 1;}
    *[Symbol.iterator]() {yield  this.member;}

}

class AbstractWritableSet extends AbstractEnumerableSet{
    insert(x){ throw  new Error("Abstract method");}
    remove(x){ throw new Error("Abstract method");}

    add(set){
        for(let element of set){
            this.insert(element);
        }
    }
    substract(set){
        for(let element of set){
            this.remove(element);
        }
    }
    intersect(set){
        for(let element of this){
            if(!set.has(element)){
                this.remove(element);
            }
        }
    }

}

class BitSet extends AbstractWritableSet{
    constructor(max) {
        super();
        this.max=max;
        this.n=0;
        this.numBytes=Math.floor(max/8)+1;
        this.data= new Uint8Array(this.numBytes);
    }
    _valid(x){ return Number.isInteger(x) && x>=0 && x<=this.max;}

    _has(x){
        if(this._valid(x)){
            let byte=Math.floor(x/8);
            let bit= x % 8;
            return this._has(byte,bit);
        } else{
            return false;
        }
    }

    insert(x){
        if(this._valid(x)){
            let byte=Math.floor(x/8);
            let bit=x % 8;
            if(!this._has(byte,bit)){
                this.data[byte] |=BitSet.bits[bit];
                this.n++;
            }
        }else{
            throw new TypeError(`Invalid set element.`);
        }
    }


    remove(x) {
        if(this._valid(x)){
            let byte=Math.floor(x/8);
            let bit= x %8;
            if(this._has(byte,bit)){
                this.data[byte] &= BitSet.masks[bit];
                this.n--;
            }
        }else {
                throw new TypeError("Invalid set element: "+ x);
        }
    }

    get size(){ return this.n;}

    *[Symbol.iterator](){
        for(let i=0; i <= this.max; i++ ){
            if(this.has(i)){
                yield i;
            }
        }
    }
}


















