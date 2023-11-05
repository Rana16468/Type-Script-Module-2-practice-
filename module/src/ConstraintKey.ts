{
    //ConstraintKey
    //ex -1
    type vehicel={
        car:string;
        bike:string;
        ship:string
    };
    type owner=keyof vehicel;
    const person:owner='car';
    console.log(person);
    //ex -2
    type Owner1='cycle' | 'car' | 'ship ' // manually declartion 

    /* details={
      name:'sohel',
      age:24
      
    }
    const data=details[name]
    
    */

   const getProperty=<X,Y extends keyof X>(obj:X,key:Y)=>{
    return obj[key];


   }

   const user={
    name:'sohel',
    age:'address',
    address:'tkg'
   }

   const result1=getProperty(user,'name');
   console.log(result1);
  
  
    
}