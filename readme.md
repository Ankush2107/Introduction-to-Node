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
`Whenever you cook food, you don't have to grow vegetables and spices in your farm by yourself. All you have to do is just go to the market and purchase it, then start making your food. This ingredients are so common that it has been grown already by someone else. This whole machanism is called framework.` 

`In software world there are so many things which are repetative, so just understand that someone else has already done some task for you, this task can be as complex as creating an authentication system or it can be as simple as running your http server. So, you don't have to do everything from scratch.`


`Library is intended to do one very simple task for you and multiple libraries can together form a framework.`

### But, What is node?(This defination is from official documentation)[https://nodejs.org/en]

Node.js is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts. 

### Story behind Node
- Runtime provides a lot of features for JavaScript to execute. So, around 2009 there was a person `Ryan Dahl` launched the solution, what he did was he prepared a new runtime called `Node` and took the part of JavaScript and added it to the node environment you use it on the terminals it means JavaScript can directly interact with our Operating System. 

- A lot of OS based fetures can be use by JavaScript. What are those fetures? Featurs like access your file system, files stored on your hard drive you can read the file, change the file, create a new file from your file explorer. 

- JavaScript before node was only run inside the browser and to be very honest the birth of JavaScript was only happen to run on the browsers, when the runtime was browser it provides a lot of features to JavaScript. 

- For example the Asynchronous nature of JavaScript comes due to the runtime, because by default JavaScript is single threaded (synchronous) but the asynchronous mechanism comes due to the runtime, So, browser give you this fetaures like timers, interval all of this things. And apart from that JavaScript was meant to run inside browsers and What does browser renders? `html` So, browser also provide feature to JavaScript using which it can manipulate html (DOM tree) rendered on the website. 

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

##### 1. Common JS moduling

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
and import it using ES moduling in this file.

`home.mjs`
```
    import searching from "./searching.js"

    console.log(searching);
```
##### `.mjs` extension tells the node environment that this is compatible for ES Moduling.

##### Second way:

##### Package: It is a folder which contains a `package.json` file.
##### `package.json` file contains information about the package.
##### json stands for JavaScript Object Notation

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

#### Built in Modules

##### fs module(file system module): 

1. Readfile

`NodeInternalModules/index.html`
```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello Guy's</h1>
        <p>Welcome to Midas institute</p>
    </body>
    </html>
```

`NodeInternalModules/fsdemo.mjs`
```
    import { readFile, writeFile } from "fs/promises";

    const filePath = new URL('./index.html', import.meta.url);
    let data = await readFile(filePath, { encoding: 'utf-8' });
    console.log(data);
```

2. WriteFile

`NodeInternalModules/index.html`
```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>{title}</h1>
        <p>{paragraph}</p>
    </body>
    </html>
```

`NodeInternalModules/fsdemo.mjs`
```
    import { readFile, writeFile } from "fs/promises";

    const filePath = new URL('./index.html', import.meta.url);
    let data = await readFile(filePath, { encoding: 'utf-8' });
    console.log(data);

    const obj =  {
        title: "Hello Guy's",
        paragraph: "Welcome to Midas institute"
    }

    for(const [key, value] of Object.entries(obj)) {
        data = data.replace(`{${key}}`, value)
    }

    await writeFile(new URL('./index.html', import.meta.url), data);
```


#### 4. Streams

Streams are collections of data — just like arrays or strings. The difference is that streams might not be available all at once, and they don’t have to fit in memory. This makes streams really powerful when working with large amounts of data, or data that’s coming from an external source one chunk at a time.

However, streams are not only about working with big data. They also give us the power of composability in our code. Just like we can compose powerful linux commands by piping other smaller Linux commands, we can do exactly the same in Node with streams.

`process.stdout`: Using process.stdout you will get access to the output stream. 

`process.stdout.write`:  process.stdout.write will start printing the data in the output stream.

`Strems/index.txt`
```
    some random text you can see by opening the file.
```

`Streams/script.js`
```
    const fs = require('fs');
    const transformStream = require('stream');

    // Got file
    let fileStream = fs.createReadStream(__dirname + "/index.txt");
    let outputStream = process.stdout;

    // reading file
    let middleStream = new transformStream.Transform({
        transform(chunk, enc, nextCB) {
            let modifiedChunk = chunk.toString().toUpperCase();
            this.push(modifiedChunk);
            setTimeout(nextCB, 1000);
            nextCB();
        }
    })

    // getting the output printed
    // fileStream.pipe(outputStream);
    let newReadableStream = fileStream.pipe(middleStream);
    newReadableStream.pipe(outputStream);
```

In `script.js` file:

Line4: I required the fs module.
Line5: I required the stream module.
Line8: I setup the readable stream in the file.
Line9: I'm storing the process.stdout inside some variable.
Line12: I'm making a modifiable, transferable streams. 
Line23: I'm connecting my file 'filestream' with transferable and modifiable stream.
Line24: Connecting the readable stream to the writable stream.


### What is REPL consoles?
A REPL console, or Read-Eval-Print Loop, is an interactive programming environment that takes single user inputs (reads them), executes them (evaluates), and returns the result to the user (prints it), and then waits for the next input (loops). This cycle continues, allowing for an iterative and interactive way to write and test code.

### Command Line Arguments 

#### process.argv
The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched. The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed. The second element will be the path to the JavaScript file being executed. The remaining elements will be any additional command-line arguments. 

```
console.log(process.argv)
```