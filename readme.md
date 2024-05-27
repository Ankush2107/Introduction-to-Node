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

#### 1. process 
The process object provides information about, and control over, the current nodejs process.

```
    console.log(process);
```

#### 2. __dirname
This global is not always accessible.

```
    console.log(__dirname);
```

#### 3. module
The module object provides information about, and control over, the current module.

##### Module Pattern
you need to explicitly mention what all you want to expose from the files.
This module object have a lot of properties, one of them is `exports`.

Now we are going to use `module.exports` to export some code.

`searching.js`
```
    function linerSearch(arr, x) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === x)
                return i
        }
        return NaN
    }

    function binarySearch(arr, x) {
        // Some codes
    }

    module.exports = {
        linear: linerSearch,
        binary: binarySearch
    }
```
and import it using common js module in this file

##### Now for consuming the exported code this module pattern contains two ways to consume 

##### 1. Common JS moduling
`index.js`
```
    // consuming the modules
    const searching = require("./searching.js")

    const arr = [1, 2, 3, 4, 5, 6];

    const x = 6

    console.log(searching.linear(arr, x));
```
##### There are two ways to consume code in ES Moduling

##### 2. ES Moduling 

##### First way: 

`home.mjs`
```
    import searching from "./searching.js"

    console.log(searching);
```
##### `.mjs` extension tells the node environment that this is compatible for ES Moduling.

##### second way is by preparing packages

##### Package: It is a folder which contains a `package.json` file.
json stands for JavaScript Object Notation

`package.json`
```
    {
        "type": "module"
    }
```

`sampleEsModuling/searching.js`
```
    function linerSearch(arr, x) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === x)
                return i
        }
        return NaN
    }

    function binarySearch(arr, x) {
        // Some codes
    }

    export{
        linerSearch,
        binarySearch
    }
```

`index.js`

```
    import searching from "./searching.js"

    console.log(searching);
```

Note: A folder qualifies as a packages when it contains `package.json` file, if it dosn't contains it is not a package. You can refer the docs (More Info about packages)[https://nodejs.org/api/packages.html#modules-packages]

#### 4. Stream
### What is REPL consoles?
A REPL console, or Read-Eval-Print Loop, is an interactive programming environment that takes single user inputs (reads them), executes them (evaluates), and returns the result to the user (prints it), and then waits for the next input (loops). This cycle continues, allowing for an iterative and interactive way to write and test code.

#### Command Line Arguments 
##### process.argv
The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched. The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed. The second element will be the path to the JavaScript file being executed. The remaining elements will be any additional command-line arguments. 

```
console.log(process.argv)
```