// simple solution of the leetcode question on the single number
let num = [1,3,2,1,2,3,2,4,2,1,2,3,2,1,2]

function SingleNumber (num){
let hash = {};
for(let i =0;i<num.length;i++)
{
    if(hash[num[i]]===undefined)
    {
        hash[num[i]]=1;
    }
    else{
        hash[num[i]]++;
    }
}
for(let i = 0;i<num.length;i++)
{
    if(hash[num[i]]===1)
    {
        return num[i];
    }
    
}
}
let result = SingleNumber(num)
console.log(result)