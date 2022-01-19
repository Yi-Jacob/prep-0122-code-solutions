// addTwoNumbers

function addTwoNumbers(x, y) {
  return x + y;
}
var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

// convertHoursToMinutes
function convertHoursToMinutes(hours) {
  return hours * 60;
}
var hours = convertHoursToMinutes(2);
console.log(hours);

// GetGreeting
function getGreeting(name) {
  return 'Fuze';
}
var name = getGreeting();
console.log('Learning ' + name);

// addAndMultiplyBy5
function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}
var product = addAndMultiplyBy5(10, 10);
console.log(product);

// multiplyAndDivideBy5
function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}
var result = multiplyAndDivideBy5(10, 10);
console.log(result);

// subtractTwoNumbers
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var difference = subtractTwoNumbers(11, 10);
console.log(difference);

// getCircleCircumference
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var circum = getCircleCircumference(5);
console.log(circum);

// getFullName
function getFullName(firstName, lastName) {
  return firstName + lastName;
}
var fullName = getFullName('Jacob', ' Yi');
console.log(fullName);

// cube
function cube(num) {
  return num * num * num;
}
var cubed = cube(5);
console.log(cubed);
