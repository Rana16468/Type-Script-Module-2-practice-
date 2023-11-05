//Type assertion / type narrowing
{
    //Type assertion / type narrowing
    let comonvalue:any;
    comonvalue='the quick brown fox';
    console.log((comonvalue as string).toUpperCase());
    //kgtogram assertion function

    const kgTogm=(value:string | number):string | number | unknown=>{

       if(typeof value==='string')
       {
        const result:number=parseFloat(value) * 1000;
        return `the kg to Gram is ${result}`

       }
       else if(typeof value==='number')
       {
        return value * 1000
       }
      

    }
    console.log(kgTogm('20') as string);
    console.log(kgTogm(20) as number);
    console.log(kgTogm('') as unknown);

    // try casse blog'

    type customError={
        message:'system error '
    }
    try{

    }
    catch(error)
    {
        console.log((error as customError).message)
    }
}