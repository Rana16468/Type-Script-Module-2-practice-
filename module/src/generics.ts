{
    //generic type 

    type genericsArray<T>=Array<T>
    const orderList:genericsArray<number>=[1,2,3,4,5,6];
    const friendList:genericsArray<string>=['sohel','rana'];
    const arrayBool:genericsArray<boolean>=[true,false,true];
    const developerList:genericsArray<{
        name:string;
        age:string;
        gender: 'male' | 'female';
        address:{
            preAddress:string;
            permanentAddress:string;
            roadNo:number;
        };
        skills:string[];
    }>=[{name:'sohel Rana',age:'24',gender:'male',address:{preAddress:'dahaka',permanentAddress:'tkg',roadNo:1234},skills:['node js']},
    {name:'sohel Rana',age:'24',gender:'male',address:{preAddress:'dahaka',permanentAddress:'tkg',roadNo:1234},skills:['node js']},
    {name:'sohel Rana',age:'24',gender:'male',address:{preAddress:'dahaka',permanentAddress:'tkg',roadNo:1234},skills:['node js']},
    {name:'sohel Rana',age:'24',gender:'male',address:{preAddress:'dahaka',permanentAddress:'tkg',roadNo:1234},skills:['node js']}]

console.log(developerList);

//tuple
 const listTuplewe:[string,number]=['sohel',23];
 //generics
type genericsTuple<x,y>=[x,y];
const listTuple:genericsTuple<number,string>=[234,'rana'];


}