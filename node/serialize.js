const v8 = require("v8");

const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
};

const binary = v8.serialize(obj);
console.log(binary);

const obj2 = v8.deserialize(binary);
console.log(obj2);
