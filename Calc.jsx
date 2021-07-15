
import React from "react";
function add(a,b)
{
   let sum=a+b;
    return sum;
}
function sub(a,b)
{
   let sub=a-b;
    return sub.toFixed(2);
}
function mult(a,b)
{
   let mult=a*b;
    return mult;
}
function div(a,b)
{
   let div=a/b;
    return div.toFixed(4);
}
export {add,sub,mult,div};