import { encodeBinary as encodeSnapshotRead } from './proto/messages/com/deno/kv/datapath/SnapshotRead.ts';
import { decodeBinary as decodeSnapshotReadOutput } from './proto/messages/com/deno/kv/datapath/SnapshotReadOutput.ts';
import { ReadRange, SnapshotRead } from './proto/messages/com/deno/kv/datapath/index.ts';
import { packKey } from "https://raw.githubusercontent.com/skymethod/kv-connect-kit/9871a9f4e3014a8307575eb8e439170d0e0a2446/src/kv_key.ts"

const start = packKey(["a"])
const end = packKey(["z"])

const range: ReadRange = {
  start,
  end,
  limit: 10,
  reverse: false,
}

const snapshotRead: SnapshotRead = {
  ranges: [
    range
  ]
}

const protobuf = encodeSnapshotRead(snapshotRead)

console.log(protobuf)

const res = await fetch("http://0.0.0.0:4512/v2/snapshot_read", {
  method: "POST",
  headers: {
    "Authorization": "Bearer a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
    "Content-Type": "application/x-protobuf",
    "x-denokv-version": "2",
    "x-denokv-database-id": "00000000-0000-0000-0000-000000000000",
  },
  body: protobuf,
});

console.log(res.status)
console.log(res.statusText)

const output = await res.arrayBuffer()
const decoded = decodeSnapshotReadOutput(new Uint8Array(output))
console.log(decoded)