var person = {
  firstName: 'Jacob',
  lastName: ' Yi',
  hobby: 'reading'
};
console.log(person);

var firstName = person.firstName;
var lastName = person.lastName;
console.log("The person's first name is", firstName + lastName);

person.job = 'coder';
console.log("This person's job is:", person.job);

person.previousjob = 'nurse';
console.log("This person's previous job is:", person.previousjob);

console.log(person);
