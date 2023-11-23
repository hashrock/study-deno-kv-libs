const date = new Date();
const tags = new Set(["a", "b", "c"]);

const item1 = {
  "_id": "6526aaf85baea6a1687e03ce",
  "index": 0,
  "guid": "3641b131-59c7-45ba-a333-98f73494e756",
  "isActive": true,
  "balance": "$2,316.95",
  "picture": "http://placehold.it/32x32",
  "age": 29,
  "eyeColor": "green",
  "name": "Ernestine Hanson",
  "gender": "female",
  "company": "QUARX",
  "email": "ernestinehanson@quarx.com",
  "phone": "+1 (969) 469-3858",
  "address": "213 Navy Walk, Crayne, Colorado, 5420",
  "about":
    "Lorem aliqua Lorem sint mollit. Adipisicing nostrud do sint incididunt culpa labore amet elit incididunt proident. Incididunt culpa nisi est Lorem commodo aliqua Lorem officia tempor. Consequat occaecat adipisicing labore duis sit consequat officia. Laborum excepteur officia commodo tempor dolore culpa excepteur nostrud qui. Nostrud tempor id proident exercitation ullamco ex excepteur sunt non laborum nostrud duis. Anim ipsum in et tempor cupidatat velit nostrud mollit aliqua excepteur fugiat anim deserunt.\r\n",
  "registered": "2018-07-28T05:51:22 -09:00",
  "latitude": -19.347479,
  "longitude": -105.082764,
  createdAt: date,
  tags,
  "user": {
    name: "John",
    birthday: date,
  },
};

const kv = await Deno.openKv();
await kv.set(["users", 1], JSON.stringify(item1));
await kv.set(["users", 2], JSON.stringify(item1));
await kv.set(["users", 3], JSON.stringify(item1));

console.log("done");
