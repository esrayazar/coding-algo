/**
 * Array with Odds
 * Create an array with all the odd integers between 1 and 255 (inclusive).
 */

var arr = [];
for(var num=1; num<=255; num+=2){
    arr.push(num);
}
console.log(arr);