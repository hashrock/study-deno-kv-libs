// a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6

const res = await fetch("http://0.0.0.0:4512", {
  method: "POST",
  headers: {
    "Authorization": "Bearer a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    "supportedVersions": [1, 2],
  }),
});

console.log(await res.json());
