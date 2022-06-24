const body = new ReadableStream({
    start(controller) {
      controller.enqueue(new Uint8Array([1, 2, 3]));
      controller.enqueue(new Uint8Array([4, 5, 6]));
      controller.close();
    },
  });
  
  const resp = await fetch("https://httpbin.org/anything", { method: "POST", body });
  for await (const chunk of resp.body) {
    console.log(chunk);
  }