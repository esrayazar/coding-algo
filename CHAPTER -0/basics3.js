/**Find and Print Max
Given an array, find and print its largest element.
*/
var arr = [ 0, 98, 8, 23, 46 ];
var max = arr[0];
for(var i=0; i<arr.length; i++){
    if(max<arr[i]){
        max= arr[i];
    }
    
}
console.log(max)