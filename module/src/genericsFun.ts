{
    //function generice
    //array of string function
    const createArray=(value:string):string[]=>{
        return [value]

    }
    console.log(createArray('Rana'));
    // generics Function
    const genericesArrayFun=<T>(parma:T):T[]=>{
        return [parma];


    }
    console.log(genericesArrayFun<string>('Ali Mohammad'));
   const result1= genericesArrayFun<{name:string;age:number}>({name:'sohel Rana',age:24});
   console.log(result1);

   //simple generic Tuple 
   const createGenericTuple=(parma1:number,parma2:string)=>{

    return [parma1,parma2];
   }
   console.log(createGenericTuple(123,'sohel'));
   // create arrayof Tuple generic
   const createTupleList=<T,Q>(parma1:T,parma2:Q):[T,Q]=>{
    return [parma1,parma2];

   }
   interface userType
   {name:string;age:number;email:string};
   const userInfo={name:'sohel',age:24,email:'amsr215019@gmail.com'};
  const result2= createTupleList<string,userType>('Programming Heo',userInfo);
console.log(result2);


const addCourseToStudent=<T>(parma:T)=>{
    type companyName='Programming Hero Bangladesh';
    const company:companyName='Programming Hero Bangladesh';
    return {company,...parma};
}
type studentDetails={
    name:string;
    roll:number;
    courseName:string;
    address:{
        parAddress:string;
        preAddress?:string;
    };
    gender:'male' | 'female'
   
}


const student1=addCourseToStudent<studentDetails>({
    name:'Ali',
    roll:2,
    courseName:'C+',
    address:{
        parAddress:'Thakurgoan',
        preAddress:'Dahaka'
    },
    gender:'male'
});

type studentDetails1={
    name:string;
    roll:number;
    courseName:string;
}
const student2=addCourseToStudent<studentDetails1>({
    name:'Ali',
    roll:24,
    courseName:'Java',
    
});
console.log(student1);
console.log(student2);
}