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

