/**
 * Max, Min, Average
Given an array, print the max, min and average values for that array.
 */
var arr= [32,45,1,23,67,84,756,45,455]
var max= arr[0];
var min = arr[0];
var sum=0
for(var i=0; i<arr.length; i++){
    if(max<arr[i]){
        max=arr[i]
    } if (min>arr[i]){
        min=arr[i]
    }
    sum=sum+arr[i]
    avarage= sum/arr.length
}
console.log(max)
console.log(min)
console.log(avarage)