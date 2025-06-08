let number = 9;
function printNumberR(num)
{
    if(num==0)
    {
        return;
    }
    console.log(num);
    num--;
    printNumberR(num);
}

printNumberR(number)