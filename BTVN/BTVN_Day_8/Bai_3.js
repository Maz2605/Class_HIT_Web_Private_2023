let s = "Hello World";
let words = s.split(/[,. |\d]/);
let lastWord = words[words.length-1];
console.log(lastWord.length);
