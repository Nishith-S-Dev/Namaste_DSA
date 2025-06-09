let arr = [9,8,4,6,7,6,89,21]

function bubbleSort(arr){
    let n = arr.length
    for(let i = 0;i<n-1;i++)
    {
        let condition = false;
        for(let j = 0;j<n-i-1;j++)
        {
            if(arr[j] > arr[j+1])
            {
                let temp = arr[j];
                arr[j]= arr[j+1];
                arr[j+1]= temp;
                condition = true;
            }
           BN
        }
    }
    return arr;
}
console.log(bubbleSort(arr))