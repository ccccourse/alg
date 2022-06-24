const adapter = await navigator.gpu.requestAdapter();
console.log("GPU adapter:", adapter.name);

// this blog post is already long enough, I won't go into
// low level GPU programming here :-)