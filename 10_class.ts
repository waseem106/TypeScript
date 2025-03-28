class student{

    studentName:string;
    address:string;
    cell:number;

    constructor(studentName:string,address:string,cell:number)
    {
        this.studentName=studentName;
        this.address=address;
        this.cell=cell;
    }

}

const obj=new student("Waseem","gujranwala",123455)



//? Members Visiblity 
//Class members also be given special modifiers
//public: allow access to the class member form anywhere
//private:allow access to the class  memebrs from within the class
//protected:allow access to the class member from itself and classes that inherit it 