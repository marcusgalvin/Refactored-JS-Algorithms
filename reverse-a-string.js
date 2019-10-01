function reverseString(str) {
  var result = str
    .split("")
    .reverse()
    .join("");
  console.log(result);
  return result;
}

reverseString("hello");
