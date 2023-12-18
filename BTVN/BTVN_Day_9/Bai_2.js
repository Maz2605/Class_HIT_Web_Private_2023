let numberIndex = 1234;
numberIndex++;
let numberString = numberIndex.toString();
let string = numberString.split("");
let out="";
for (let index = 0; index < string.length; index++) {
    if(index==string.length-1)
        out +=string[index];
    else
        out +=string[index]+", ";
        
}
console.log("["+out+"]");
