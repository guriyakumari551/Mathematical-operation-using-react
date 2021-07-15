import React from 'react';
import ReactDOM from 'react-dom';
import {add,sub,mult,div} from './Calc.jsx' ;
ReactDOM.render(
    <>
    <ol>
        <li>Sum of two number is {add(10,20)}</li>
        <li>Sub of two number is {sub(20,15)}</li>
        <li>Mult of two number is {mult(2,4)}</li>
        <li>Div of two number is {div(10,3)}</li>
    </ol>
    </>,
    document.getElementById('root')
);