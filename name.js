
// simple calculators

let calculate;
let number3;
let number4;
let result;

number3 = parseFloat(prompt("Enter first number"));
number4 = parseFloat(prompt("Enter second number"));

calculate = prompt("Enter operator ( either +, -, * or / ): ");
    //switch
switch (calculate) {
  case "+":
    result = number3 + number4;
    alert(result);
    break;

  case "-":
    result = number3 - number4;
    alert(result);
    break;

  case "*":
    result = number3 * number4;
    alert(result);
    break;

  case "/":
    result = number3 / number4;
    alert(result);
    break;

  default:
    console.log("Invalid operator");
    break;
}
