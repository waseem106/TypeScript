class student{

    studentName:string;
    address:string;
    cell:number;
    readonly course:string="TypeScript" //now this field cannot be modified

    constructor(studentName:string,address:string,cell:number)
    {
        this.studentName=studentName;
        this.address=address;
        this.cell=cell;
    }

}

const obj=new student("Waseem","gujranwala",123455)
console.log(obj)





// Super Calls  we have to add super() in derived class and if we not typeScript will show us error 

class Base{
    k=4;
}

class Derived extends Base{

    constructor(){
        super()
        console.log("k value",this.k)
        
    }

}

const obj2=new Derived()   

//? Members Visiblity 
//Class members also be given special modifiers
//public: allow access to the class member form anywhere
//private:allow access to the class  memebrs from within the class
//protected:allow access to the class member from itself and classes that inherit it 
//? Getters / Setters also included

class Person{
    private name:string;
    public constructor(name:string)
    {
        this.name=name
    }
    public getName():string{

        return this.name
    }
    public setName(name:string):void{
        this.name=name
    }
}

const obj3=new Person("waseem")
// console.log(obj3.name) only acessible inside the class 
console.log(obj3.getName())
obj3.setName("hamza")           // it will change the value of the class member
console.log(obj3.getName())   



// Interfaces : interfaces can be used in typescript to define the type a class must folow  through the //?implements keyword

interface MyShape {
    name:string;
    color:string;
    myArea():number;
}

class Rectangle implements MyShape {
   
    public width:number
    public hieght:number
    name="waseem";
    color="red";

    constructor(width:number,hieght:number)
    {
        this.width=width;
        this.hieght=hieght
    }
    myArea(): number {
        return this.width * this.hieght
    }
}

const obj4=new Rectangle(23,23)
console.log(obj4.myArea())




//? Override
// when class extends other class it can replace the  members of the  parent class with the same name



class Parent{
    greet():void{
        console.log("Hello from parent class")
    }
}

class Child extends Parent{
        override greet(): void {
            console.log("Hello from  child class")    
        }
}


const p1=new Parent()
p1.greet()
const c1 =new Child()
c1.greet()




// abstract clases 
// abstract classes are used as blue prints for the other classes
//Can have abstract methods (methods with no implementation).
//Can have regular methods with implementations.
//Must be extended by another class to use its properties and methods.
//we cannot  create an instance of object class


abstract class Vehicle{
    abstract carName():void;

    mycar():void{
        console.log("I am Vehicle Class")
    }
}


class Car extends Vehicle{
     override carName(): void {
            console.log("I am override in car class")
    }
}

// const veh=new Vehicle()  canot create a instance of abstract vehicle class
const carobj=new Car()
carobj.carName()
carobj.mycar()
