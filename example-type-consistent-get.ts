const kv = await Deno.openKv();

const a = await kv.get(["type", 1]) as { value: { createdAt: any } };
console.log(typeof a.value.createdAt);
