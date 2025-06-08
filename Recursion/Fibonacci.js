let number = 9;

function fibonacci(num)
{
   if(num<=1)
   {
       return num;
   }
    return fibonacci(num-1)+fibonacci(num-2);
}
console.log("the fibonacci series of",number,"is",fibonacci(number));