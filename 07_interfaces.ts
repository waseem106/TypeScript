// ? What are TypeScrpit interfaces
// * At its core ,an interface in ts is syntaical contract that defines the expected structure of the object. 
//it allows to define the shape of objects including their properties and methods without implementing any funcitonality 
//?Interfaces solely focus on the structure and type-checking aspects, allowing for better code understanding and validation during development.

// Syntax of Intefaces

// inteface IntefaceName {
//     property1:type;
//     property2:type;
// }


// usage 

interface Shape{
    name:string;
    color:string;
    area():number;
}


function calculateShapeArea(shape:Shape){
console.log(`Calculting the area of ${shape.name}`)
console.log(`The are of ${shape.name} is ${shape.area()}`)
}

const circle:Shape={
    name:"circle",
    color:"red",
    area(){
        return Math.PI*2*2
    },
}

calculateShapeArea(circle)



//* Extended interface
// Interfaces can extend other interfaces, enabling composition and reuse of interface  defination
// we will extend Shape interface to the 3D shape 

interface ThreeDShape extends Shape{
    volume():number;
}


function calculateThreeDShape(shape:ThreeDShape)
{
    console.log(`the area of ${shape.name} is ${shape.area()}`)
    console.log(`the volume of ${shape.name} is ${shape.volume()}`)
}


const sphere:ThreeDShape={
    name:"Sphere",
    color:"Green",
    area(){
      return 4 * Math.PI 
    },
    volume() {
        return (4/3)*Math.PI    
    },
}

calculateThreeDShape(sphere)