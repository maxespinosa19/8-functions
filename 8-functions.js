//  Gas Cost calculator

function calculateGasCost(startOdometer, endOdometer) {
    const milesDriven = endOdometer - startOdometer;
    const gasCostPerMile = 0.15;
    const totalCost = milesDriven * gasCostPerMile;
  
    return totalCost;
  }
  
  const startOdometer = 10000;
  const endOdometer = 10500;
  
  const gasCost = calculateGasCost(startOdometer, endOdometer);
  console.log("Gas cost for the trip: $" + gasCost.toFixed(2));
  
  // Multiply three numbers
const multiplyThreeNumbers = function(num1, num2, num3) {
    return num1 * num2 * num3;
  };
  
  // Multiply four numbers
  const multiplyFourNumbers = function(num1, num2, num3, num4) {
    return multiplyThreeNumbers(num1, num2, num3) * num4;
  };
  
  // Multiply five numbers
  const multiplyFiveNumbers = function(num1, num2, num3, num4, num5) {
    return multiplyFourNumbers(num1, num2, num3, num4) * num5;
  };
  
  // Multiply six numbers
  const multiplySixNumbers = function(num1, num2, num3, num4, num5, num6) {
    return multiplyFiveNumbers(num1, num2, num3, num4, num5) * num6;
  };
  
  // console.log 
  const result1 = multiplyThreeNumbers(2, 3, 4);
  console.log("Result of multiplying three numbers:", result1);
  
  const result2 = multiplyFourNumbers(2, 3, 4, 5);
  console.log("Result of multiplying four numbers:", result2);
  
  const result3 = multiplyFiveNumbers(2, 3, 4, 5, 6);
  console.log("Result of multiplying five numbers:", result3);
  
  const result4 = multiplySixNumbers(2, 3, 4, 5, 6, 7);
  console.log("Result of multiplying six numbers:", result4);
  
  // Cone Calculator


function calculateConeVolume(radius, height) {
    const volume= (1 / 3) * 3.14159 * (radius * radius) * height;
    return volume;
}

const radius = 5
const height = 10
const coneVolume = calculateConeVolume(radius, height);
console.log("volume of the cone:" , coneVolume)

//summation sentence
const num1= 3
const num2= 6
const result= num1 + num2
console.log("The sum of " + num1 + " and " + num2 + " is " + result)

//remainder calculator
function remainderCalc(numerator, divisor) {
     const remainder = numerator % divisor; 

    return remainder;

}

const solution = remainderCalc(4, 5)
console.log(solution)

//Banana picker

function Bananapicker(quantity=21){
    const BananaOrder = "🍌".repeat(quantity);
    return BananaOrder;
}

const bananaResult = Bananapicker(21);
console.log(bananaResult);
  

//Name Concatenator

function fullName(firstName, lastName) {
    
    const result = firstName + lastName
    return result
}

const getName = fullName("Your", "Mom");

console.log(getName);

//String Length
function getLength(string) {


    const totalLength = string.length;
    return totalLength;
}

const string = "Boca Code";
const stringLength = 
"the total characters of " + string + " is " + getLength(string);

console.log(stringLength);