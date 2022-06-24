const input = new ReadableStream({
    start(controller) {
      controller.enqueue("Hello, ");
      controller.enqueue("world!");
      controller.close();
    },
  });
  
  const transformer = new TransformStream({
    transform(chunk, controller) {
      controller.enqueue(chunk.toUpperCase());
    },
  });
  
  const output = input.pipeThrough(transformer);
  
  for await (const chunk of output) {
    console.log(chunk);
  }