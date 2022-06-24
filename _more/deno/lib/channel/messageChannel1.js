const channel = new MessageChannel();
const { port1, port2 } = channel;
port1.onmessage = (event) => {
  console.log(event.data);
  port1.close();
};
port2.postMessage("Hello, world!");
port2.close();