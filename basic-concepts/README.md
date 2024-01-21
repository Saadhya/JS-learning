# About JS Learning
This repository aims to set examples for javascript basic concepts.

# how javascript works?
Everything in javascript happens inside an execution context.
Js is a synchronous single-threaded language.:which has two components Memory and Code::
Memory : block used to allocate memory to var and function initialization
Code: block used for statements and return statement
A brand new execution-context will be created for each function calling.:: like- square(4)

# Call stack :
Call stack maintains the order of execution of Execution Context.

# Functions :
Array.isArray(arr)= boolean
element.indexOf('class')
element.replace('oldval','newval')
startswith() and endswith()
split("")
reverse()
join("");- opposite of split()
sort((a, b)=>{})


# Closures:
A closure is a function that references variables in the outer scope from its inner scope.
closure preserves the outer scope inside its inner space even after outer function is returned.
avoid declaring your variable in window scope, parent
due to lexical
