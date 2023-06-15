const mp = {};

// Insert values into the map
mp["key1"] = [1, 2, 3];
mp["key2"] = [4, 5, 6];

// Access and print the values
for (const key in mp) {
  if (mp.hasOwnProperty(key)) {
    console.log("Key:", key);
    console.log("Values:", mp[key]);
  }
}