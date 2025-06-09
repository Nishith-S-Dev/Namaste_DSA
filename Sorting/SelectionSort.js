let Array = [5,4,3,2,1];
function Selection_Sort(arr){
  for(let i = 0;i<arr.length-1;i++)
  {
    let min= i;
    for(let j = i+1;j<arr.length;j++)
    {
        if(arr[j]<arr[min])
        {
            min = j;
        }
    }
    if(i != min)
    {
        let temp = arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
    }
  }
  return arr;
}
console.log(Selection_Sort(Array))