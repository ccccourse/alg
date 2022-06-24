const obj = {
    foo: "bar",
    baz: {
      qux: "quux",
    },
  };
  const clone = structuredClone(obj);
  console.log(obj === clone); // false
  console.log(obj.baz === clone.baz); // false
  
  obj.baz.qux = "quuz";
  console.log(obj.baz.qux); // quuz
  console.log(clone.baz.qux); // quux