let number = 13;

function factorial(num)
{
    if(num<0)
    {
        console.log("the Factorial is undefined for such case")
        return null
    }
    if(num==0)
    {
        return 1;    
    }
    return num*factorial(num-1);
}
console.log(factorial(number))