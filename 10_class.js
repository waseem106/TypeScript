var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var student = /** @class */ (function () {
    function student(studentName, address, cell) {
        this.course = "TypeScript"; //now this field cannot be modified
        this.studentName = studentName;
        this.address = address;
        this.cell = cell;
    }
    return student;
}());
var obj = new student("Waseem", "gujranwala", 123455);
console.log(obj);
// Super Calls  we have to add super() in derived class and if we not typeScript will show us error 
var Base = /** @class */ (function () {
    function Base() {
        this.k = 4;
    }
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        var _this = _super.call(this) || this;
        console.log("k value", _this.k);
        return _this;
    }
    return Derived;
}(Base));
var obj2 = new Derived();
//? Members Visiblity 
//Class members also be given special modifiers
//public: allow access to the class member form anywhere
//private:allow access to the class  memebrs from within the class
//protected:allow access to the class member from itself and classes that inherit it 
//? Getters / Setters also included
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var obj3 = new Person("waseem");
// console.log(obj3.name) only acessible inside the class 
console.log(obj3.getName());
obj3.setName("hamza"); // it will change the value of the class member
console.log(obj3.getName());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, hieght) {
        this.name = "waseem";
        this.color = "red";
        this.width = width;
        this.hieght = hieght;
    }
    Rectangle.prototype.myArea = function () {
        return this.width * this.hieght;
    };
    return Rectangle;
}());
var obj4 = new Rectangle(23, 23);
console.log(obj4.myArea());
//? Override
// when class extends other class it can replace the  members of the  parent class with the same name
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.greet = function () {
        console.log("Hello from parent class");
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.greet = function () {
        console.log("Hello from  child class");
    };
    return Child;
}(Parent));
var p1 = new Parent();
p1.greet();
var c1 = new Child();
c1.greet();
// abstract clases 
// abstract classes are used as blue prints for the other classes
//Can have abstract methods (methods with no implementation).
//Can have regular methods with implementations.
//Must be extended by another class to use its properties and methods.
//we cannot  create an instance of object class
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.mycar = function () {
        console.log("I am Vehicle Class");
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.carName = function () {
        console.log("I am override in car class");
    };
    return Car;
}(Vehicle));
// const veh=new Vehicle()  canot create a instance of abstract vehicle class
var carobj = new Car();
carobj.carName();
carobj.mycar();
