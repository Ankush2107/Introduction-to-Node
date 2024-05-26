# Intoduction To Node

❎ Node is not a framework.
❎ Node is not a library.
❎ Node is not a programming language.

## Before understanding what is node let's understand framework & libraries🤔

### What is framework? 
A Framework is a comprehensive package that includes multiple libraries and tools.

### What is Library?
A library is a collection of pre-written code that developer can use to perform specific well defined task.

### In Simple words...
`Whenever you cook food, you don't have to grow vegetables and spices in your farm by yourself.All you have to is just go to the market and purchase it, then start making you food. This ingredients are so common that it has been grown already by someone else. This whole machanism is called framework.` 

`In software world there are so many things which are repetative, so just understand that someone else has alreadys done some task for you, this task can be as complex as creating an authentication system or it can be as simple as running your http server. So, you don't have to do everything from scratch.`


`Library is intended to do one very simple task for you and multiple libraries can together form a framework.`

### But, What is node?(This defination is from official documentation)[https://nodejs.org/en]

Node.js is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts. 

### Story behind Node
- Runtime provides a lot of features for JavaScript to execute. So, around 2009 there was a person `Ryan Dahl` launched the solution what he did was he prepared a new runtime called `Node` and took the part of JavaScript and added it to the node environment you use it on the terminals it means JavaScript can directly interact with our Operating System. 

- A lot of OS based fetures can be use by JavaScript. What are those fetures? Featurs like access your file system, files stored on your hard drive you can read the file, change the file, create a new file from your file explorer. 

- JavaScript before node was only run inside the browser and to be very honest the birth of JavaScript was only happen to run on the browsers, when the runtime was the browsers and as I said runtime provides a lot of features to JavaScript. 

- For example the Asynchronous nature of JavaScript comes due to the runtime, because by default JavaScript is single threaded (synchronous) but the asynchronous mechanism comes due to the runtime, So, browser you to give this fetaures like timers, interval all of this things. And apart from that JavaScript was ment to run inside browsers and What does browser renders `html`, So, browser also provide feature to JavaScript using which it can manipulate html (DOM tree) rendered on the website. 

### But the Problem here is...
If the JavaScript can only interact with the browser the possiblities are very less, we can only do things inside browsers we can't interact with the rest of the system.

### Now, How we can code in Node?
So, you just need to install Node runtime environment from the (official website)[https://nodejs.org/en]. 

## The major features JavaScript gets from the NodeJS runtime.
### Globals
Global object is provided by NodeJS runtime environment.

1. process: The process object provides information about, and control over, the current nodejs process.

```
    console.log(process)
```