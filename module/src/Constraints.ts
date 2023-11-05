{
    // Constraints generics

    // generic addto course

    const addToCourse=<T extends {id:number;name:string;age:number; address:string}>(student:T)=>{
        type companyName='Programming Hero Bangladesh';
        const company:companyName='Programming Hero Bangladesh';
        return {
            company,
            ...student
        }

    }
    
   const student1= addToCourse({id:1,name:'sohel rana',age:23,address:'Thajurgoan'});
   const student2= addToCourse({id:2,name:'sohel rana',age:23,address:'Thajurgoan'});
   console.log(student1);
   console.log(student2);

}