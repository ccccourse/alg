const formData = new FormData();
formData.append("name", "Deno");
formData.append("age", "3");
formData.append("file", new File(["Hello World"], "hello.txt"));

const resp = await fetch("https://httpbin.org/post", {
  method: "POST",
  body: formData,
});

console.log(await resp.json())