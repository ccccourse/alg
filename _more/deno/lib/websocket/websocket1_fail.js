const ws = new WebSocket("ws://localhost:4500");
ws.onopen = () => {
  ws.send("Hello, world!");
};
ws.onmessage = (event) => {
  console.log(event.data);
  ws.close();
};