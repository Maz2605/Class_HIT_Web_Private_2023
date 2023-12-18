let number = 12;
let strNumber = number.toString();
if(strNumber===strNumber.split("").reverse().join(""))
    console.log("Yes");
else
    console.log("No");