let num = 9;

function Nto1(num, i=1)
{
    if(i>num){
        return;
    }
    console.log(i);
    i++;
    Nto1(num,++i);
}
Nto1(num);