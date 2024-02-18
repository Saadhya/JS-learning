# error- "Cannot read properties of null (reading 'addEventListener')"
- There are 2 main reasons the error occurs: Accessing the addEventListener() method on an element that doesn't exist. Inserting the JS script tag above the HTML where the DOM elements are declared.

// Here is an example of how to return 2 functions inside a variable in JavaScript:

# IN DAY2 FILE
In JavaScript, you can create a function that can be called only once by using a closure to keep track of whether the function has been called before.JavaScript closure is a feature that allows inner functions to access the outer scope of a function.

# moized function
In this example, the memoize function takes a function as an argument and returns a new function that memoizes the results of the original function. The new function checks if the result of the original function is already in the cache before calling the original function. If the result is in the cache, the new function returns the cached result. Otherwise, the new function calls the original function and stores the result in the cache.

# day3 
If you are getting [object Promise] as value, it means that you are calling an asynchronous function inside a synchronous code. This means the synchronous code runs line by line giving no room for asynchronous code to wait and give a response (the promise).
To fix this, you can use the then() method or the async/await syntax to wait for the Promise to resolve before continuing with your code.