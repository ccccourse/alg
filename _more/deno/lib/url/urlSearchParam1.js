const url = new URL("https://example.com/foo");
console.log(url.href); // https://example.com/foo
console.log(url.hostname); // example.com
console.log(url.searchParams.get("name")); // undefined
url.searchParams.append("name", "bar");
console.log(url.href); // https://example.com/foo?name=bar