let a, b, c;
a = 1;
b = 2;
c = 3;
let max;
if (a>=b&&a>=c) {
    max=a;
}else if(b>=c&&b>=a)
    max = b;
else 
    max = c;
console.log(max);