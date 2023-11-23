const obj = {
  child: {
    123: 1n,
  },
};

function replacer(_key: string, value: unknown) {
  if (typeof value === "bigint") {
    return value.toString();
  }
  return value;
}

console.log(JSON.stringify(obj, replacer));

// const map = new Map();
// map.set("a", "b");
// map.set("c", "d");
// console.log(JSON.stringify(map))
