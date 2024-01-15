const Keyv = require("keyv");
const keys = new Keyv();
const set = (key, value, ttl = undefined) => {
  return keys.set(key, value, ttl);
};
const get = (key) => {
  return keys.get(key);
};
const del = (key) => {
  return keys.delete(key);
};
const clear = () => {
  return keys.clear();
};
const cache = { set, get, del, clear };
module.exports = cache;
