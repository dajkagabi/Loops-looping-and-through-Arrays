# Loops-looping-and-through-Arrays


Loops

A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached. As a programmer, you’ll find that you rely on loops all the time! You’ll hear the generic term iterate when referring to loops; iterate simply means “to repeat”.

When we need to reuse a task in our code, we often bundle that action in a function. Similarly, when we see that a process has to repeat multiple times in a row, we write a loop. Loops allow us to create efficient code that automates processes to make scalable, manageable programs. 


![code](https://user-images.githubusercontent.com/70899647/211329112-a43bc07d-e3b3-46fc-bcef-b0f3fa44bf49.png)


![code2](https://user-images.githubusercontent.com/70899647/211329118-0d9a834d-302b-4c5a-8d7f-c56432a0750b.png)


Looping in Reverse

What if we want the for loop to log 3, 2, 1, and then 0? With simple modifications to the expressions, we can make our loop run backward!

To run a backward for loop, we must:

    Set the iterator variable to the highest desired value in the initialization expression.
    
    Set the stopping condition for when the iterator variable is less than the desired amount.
    
    The iterator should decrease in intervals after each iteration.

We’ll practice by changing the for we wrote previously to now go in reverse. When writing/changing loops, there is a chance that our stopping condition isn’t met and we get a dreaded infinite loop which essentially stops our programming from running anything else! To exit out of an infinite loop in an exercise, refresh the page - then fix the code for your loop.

![code3](https://user-images.githubusercontent.com/70899647/211329281-5f09d949-e79b-4e36-92c2-cbab31106616.png)


Looping through Arrays

for loops are very handy for iterating over data structures. For example, we can use a for loop to perform the same operation on each element on an array. Arrays hold lists of data, like customer names or product information. Imagine we owned a store and wanted to increase the price of every product in our catalog. That could be a lot of repeating code, but by using a for loop to iterate through the array we could accomplish this task easily.

To loop through each element in an array, a for loop should use the array’s .length property in its condition. 

![code4](https://user-images.githubusercontent.com/70899647/211329555-ea1f9815-c0d8-482c-8e93-8ddd4469daa0.png)


In the loop above, we’ve named our iterator variable i. This is a variable naming convention you’ll see in a lot of loops. When we use i to iterate through arrays we can think of it as being short-hand for the word index. Notice how our stopping condition checks that i is less than animals.length. Remember that arrays are zero-indexed, the index of the last element of an array is equivalent to the length of that array minus 1. If we tried to access an element at the index of animals.length we will have gone too far!

With for loops, it’s easier for us to work with elements in arrays.


Write a for loop that iterates through our vacationSpots array using i as the iterator variable.

Inside the block of the for loop, use console.log() to log each element in the vacationSpots array after the string 'I would love to visit '. For example, the first round of the loop should print 'I would love to visit Bali' to the console.



![code5](https://user-images.githubusercontent.com/70899647/211329639-bffefda5-d9f5-4c38-ab4c-bae2e1eed963.png)





