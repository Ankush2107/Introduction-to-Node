// process.stdout.write("Ankush");
// console.log(process.stdout);

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