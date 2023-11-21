import { encodeBinary as encodeAtomicWrite } from './proto/messages/com/deno/kv/datapath/AtomicWrite.ts';
import { encodeBinary as encodeSnapshotRead } from './proto/messages/com/deno/kv/datapath/SnapshotRead.ts';
import { decodeBinary as decodeSnapshotReadOutput } from './proto/messages/com/deno/kv/datapath/SnapshotReadOutput.ts';
import { decodeBinary as decodeAtomicWriteOutput } from './proto/messages/com/deno/kv/datapath/AtomicWriteOutput.ts';
import { AtomicWrite, AtomicWriteOutput, SnapshotRead, SnapshotReadOutput } from './proto/messages/com/deno/kv/datapath/index.ts';

const protobuf = "" //TODO

const res = await fetch("http://0.0.0.0:4512/v2/snapshot_read", {
  method: "POST",
  headers: {
    "Authorization": "Bearer a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
    "Content-Type": "application/x-protobuf",
    "x-denokv-version": "2",
    "x-denokv-database-id": "a1b2c3d4-e5f6-7g8h-9i1j-2k3l4m5n6o7p",
  },
  body: protobuf,
});

