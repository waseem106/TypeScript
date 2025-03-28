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
// Interfaces : interfaces can be used in typescript to define the type a class must folow  through the //?implements keyword
