import {PI, getCircumference, getDiameter, getArea} from "./scriptModule.js"

console.log(PI);
console.log("Area : ", (getArea(5)).toFixed(2)+"cm^2");
console.log("Circumference : ", (getCircumference(5)).toFixed(2)+"cm");
console.log("Diameter : ", getDiameter(5)+"cm");