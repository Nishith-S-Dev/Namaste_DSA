let number = 10;
function RecursionSum (number)
{
    if(number == 0 )
    {
        return 0;
    }
    else{
        return number+RecursionSum(number-1); 
    }
}
console.log(RecursionSum(900));