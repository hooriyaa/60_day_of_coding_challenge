// Task 1: The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result:

function checkAgee(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
// Will the function work differently if else is removed?

function checkAgeW(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
// Is there any difference in the behavior of these two variants?
// Answer: No difference
// in both cases, return confirm('did parents allow you?) execute exactly when if condition falsy

// Task 2: The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:
// Using a question mark operator ?
// Using OR ||
function checkAgeQ(age){
    (age > 18) ? true : confirm('Did parents allow you?')
}

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

// Task 3: Write a function min(a,b) which returns the least of two numbers a and b.
// For instance:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a,b){
 if(a<b){
    return a;
 }  else{
    return b
 }
}

console.log(min(9, 3));
console.log(min(2, 8));


