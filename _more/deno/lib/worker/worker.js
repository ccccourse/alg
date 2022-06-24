import * as Comlink from "https://cdn.skypack.dev/comlink@4.3.1?dts";

const obj = {
  counter: 0,
  inc() {
    this.counter++;
  },
};

Comlink.expose(obj);