const blob = new Blob(["Hello World"]);
const text = await blob.text();
console.log(text);

const file = new File(["Hello World"], "hello.txt");
console.log(file.name);
console.log(file.size);
const bytes = await file.arrayBuffer();
console.log(new Uint8Array(bytes));