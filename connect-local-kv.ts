#!/usr/bin/env -S DENO_KV_ACCESS_TOKEN=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6 deno run --allow-net --allow-read --allow-write --allow-env --unstable

const kv = await Deno.openKv("http://0.0.0.0:4512")

await kv.set(["hello"], "world")
console.log("done")