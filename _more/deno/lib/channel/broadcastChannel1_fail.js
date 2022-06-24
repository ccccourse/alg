const channel = new BroadcastChannel("my-channel");
channel.onmessage = (event) => {
  console.log(event.data);
};
channel.postMessage("Hello, world!");
