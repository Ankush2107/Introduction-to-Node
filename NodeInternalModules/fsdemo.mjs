import { readFile, writeFile } from "fs/promises";

// console.log(__dirname)
// console.log(import.meta.url); // use for get the file path

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