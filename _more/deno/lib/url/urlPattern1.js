const pattern = new URLPattern({ pathname: "/hello/:name" });
const match = pattern.exec("https://example.com/hello/Deno");
console.log(match.pathname.groups);