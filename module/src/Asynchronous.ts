{
    //Asynchronous

    type somethingType={
        something:string

    }

   const createPromise= ():Promise<somethingType>=>{
    return new Promise<somethingType>((resolve,reject)=>{

        const data:somethingType={something:'Something is Nothing'};
        if(data){
            resolve(data);
        }else{
            reject('sonthing is the wrong');
        }

    })

   }

   // data fatching promise

   //custom error
  
   type todo={
    userId:number;
    id:number;
    title:string;
    completed:boolean;
 }
   const dataFetch= async():Promise<todo>=>{
      
        const respones= await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data= await respones.json();
        return data;
      

   }
   dataFetch().then((result)=>{
   console.log(result)
   }).catch((error)=>{
    console.log(error);
   })

   
}
