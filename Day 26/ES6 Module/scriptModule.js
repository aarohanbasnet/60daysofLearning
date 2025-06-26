//Export Modules
 export const PI = 3.14159;

 export function getArea(radius){
    return PI*Math.pow(radius, 2);
 }

 export function getCircumference(radius){
    return 2*PI*radius;
 }

 export function getDiameter(radius){
    return 2*radius;
 }

console.log("Area : ", (getArea(12)).toFixed(2)+"cm^2");
console.log("Circumference : ", (getCircumference(12)).toFixed(2)+"cm");
console.log("Diameter : ", getDiameter(12)+"cm");