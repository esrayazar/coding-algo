/**
Print Sum 0-255
Print integers from 0 to 255, and with each integer print the sum so far.

 */
sum=0;
for(var num=0; num<=255; num+=1){
    sum+=num;
    console.log("the sum is ", sum)
}
