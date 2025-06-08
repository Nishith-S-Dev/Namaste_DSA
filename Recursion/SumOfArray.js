let arr = [1,2,3,4,5]
let n =arr.length-1;
function SumOfArray(n){
    if(n==0)
    {
        return arr[n];
    }
    if(arr[n]%2!==0){

        return arr[n]+SumOfArray(n-1); 
    }
    return SumOfArray(n-1);
}
 console.log(SumOfArray(n));
 console.log(arr)