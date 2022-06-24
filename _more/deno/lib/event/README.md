# event

```
$ deno run event1.js
Event {
  bubbles: false,   
  cancelable: false,
  composed: false,  
  currentTarget: EventTarget {
    [Symbol()]: {
      assignedSlot: false,
      hasActivationBehavior: false,
      host: null,
      listeners: { foo: [Array] },
      mode: ""
    }
  },
  defaultPrevented: false,
  eventPhase: 2,
  srcElement: null,
  target: EventTarget {
    [Symbol()]: {
      assignedSlot: false,
      hasActivationBehavior: false,
      host: null,
      listeners: { foo: [Array] },
      mode: ""
    }
  },
  returnValue: true,
  timeStamp: 1650157717686,
  type: "foo"
}
```