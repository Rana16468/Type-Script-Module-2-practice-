"use strict";
//Type assertion / type narrowing
{
    //Type assertion / type narrowing
    let comonvalue;
    comonvalue = 'the quick brown fox';
    console.log(comonvalue.toUpperCase());
    //kgtogram assertion function
    const kgTogm = (value) => {
        if (typeof value === 'string') {
            const result = parseFloat(value) * 1000;
            return `the kg to Gram is ${result}`;
        }
        else if (typeof value === 'number') {
            return value * 1000;
        }
    };
    console.log(kgTogm('20'));
    console.log(kgTogm(20));
    console.log(kgTogm(''));
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
