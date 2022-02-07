/**
 * Greater Than Y
Given an array and a value Y, count and print the number of array values greater than Y.

 */
var arr= [3,45,12,13,98,56,478];
var y= 13;
for(var i=0; i<arr.length; i++){
    if(arr[i]>y){
        console.log(arr[i]);
    }
}