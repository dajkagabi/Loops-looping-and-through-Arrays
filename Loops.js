Loops

A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached. As a programmer, you’ll find that you rely on loops all the time! You’ll hear the generic term iterate when referring to loops; iterate simply means “to repeat”.

When we need to reuse a task in our code, we often bundle that action in a function. Similarly, when we see that a process has to repeat multiple times in a row, we write a loop. Loops allow us to create efficient code that automates processes to make scalable, manageable programs. 


1.
const vacationSpots = ['Boy', 'Girl', 'Dog', 'Cat', 'Fish'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);
console.log(vacationSpots[3]);
console.log(vacationSpots[4]);




The For Loop

Instead of writing out the same code over and over, loops allow us to tell computers to repeat a given block of code on its own. One way to give computers these instructions is with a for loop.

The typical for loop includes an iterator variable that usually appears in all three expressions. The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration. Iterator variables can have any name, but it’s best practice to use a descriptive variable name.

A for loop contains three expressions separated by ; inside the parentheses:

- an initialization starts the loop and can also be used to declare the iterator variable.
-  a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
   - an iteration statement is used to update the iterator variable on each loop.


This for loop makes it possible to write 0, 1, 2, and 3 programmatically.

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}


2.

for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}