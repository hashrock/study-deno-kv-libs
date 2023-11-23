
const kv = await Deno.openKv();

const item = {
  id: 1,
  name: "John Doe",
  createdAt: new Date(),
  tags: new Set(["a", "b", "c"]),
};

await kv.set(["type", 1], item);
