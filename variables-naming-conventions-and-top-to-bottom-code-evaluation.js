/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
    - To understand meaning behing each Code 
    - To be able to communicate properly with collaborates that are working on the code.
    - For future contributors.
    - For the easier debugging process.
  - What are the common pitfalls to avoid when naming variables?
    - avoid using names that are taken like "let"
    - avoid using numbers, or single words or alphabets that don't mean anything.
    - Try to follow the trend which is using the camelCase technique.
  - How do clear variable names benefit team collaboration?
    When collaborators read the codes, they proper naming can represent the values properly and it decreases the possible confusion. Futthermore, it helps with debugging.

*/

let customerName = "Alice";
let numberOfItems = 5;
let totalCost = 20;
const storeName = "Freshmarket";
const storeLocation = "St. Louis";

let purchaseReport = customerName + " purchased " + numberOfItems + " items for $" + totalCost + " at " + storeName + " in " + storeLocation + ".";

console.log(purchaseReport);
