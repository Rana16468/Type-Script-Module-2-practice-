{
    //mapping types
   type UserDetails<T>={
          [key in keyof T]: T[key]
   }

   const details:UserDetails<{
    name:string;
    age:number;
    address:string;


   }>={
        name:'sohel',
        address:'',
        age:24


   }

   
    
}