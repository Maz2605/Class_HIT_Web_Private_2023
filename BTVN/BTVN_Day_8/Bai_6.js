
let index1, index2;
index1 = 10;
index2 = 20;
let a = index1;
let b = index2;
while(b!=0){
    let temp = b;
    b = a % b;
    a = temp;
}
let UCLN = a;
let BCNN = (index1*index2)/UCLN;
console.log(UCLN + ", "+ BCNN);