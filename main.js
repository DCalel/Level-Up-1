const test1 = { b: 2, c: 3, a: 1 };

const test2 = { a: "Apple", b: "Microsoft", c: "Google" };

const test3 = { key1: "true", key2: "false", key3: "undefined" };

function getKeysAndValues(param) {
  let keysAndValues = [];
  let key = Object.getOwnPropertyNames(param);
  key = key.sort();
  let value = [];
  for (let i = 0; i < key.length; i++) {
    value.push(param[key[i]]);
  }
  keysAndValues.push(key);
  keysAndValues.push(value);
  return keysAndValues;
}

const answer1 = getKeysAndValues(test1);
const answer2 = getKeysAndValues(test2);
const answer3 = getKeysAndValues(test3);

var data = document.getElementById("data");
data.innerHTML = "<h4>[" + answer1[0] + "]" + "[" + answer1[1] + "]";
data.innerHTML += "<h4>[" + answer2[0] + "]" + "[" + answer2[1] + "]";
data.innerHTML += "<h4>[" + answer3[0] + "]" + "[" + answer3[1] + "]";
