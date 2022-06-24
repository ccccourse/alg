const encoder = new TextEncoder();
const bytes = encoder.encode("Hello World");
console.log(bytes);

const decoder = new TextDecoder();
const text = decoder.decode(bytes);
console.log(text);