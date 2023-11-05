{
    //alias vs iterface
    //aliea and interface both are same 


    //alias
    type user={
        name:string;
        age:number;
        email:string
    }


    interface user1  extends user
    {
        role?:string
    }
    type uerWithrole=user & {role?:string }
    const User:user1={
        name:'sohel rana',
        age:23,
        email:'amsr@gmail.com',
        role:'stuent'
        
        
    };
    console.log(User);
  

    type rollNo=number[];
    const rollNumber:rollNo=[1,2,3,4,5];
    console.log(rollNumber);
    interface rollno2{
        [index:number]:number;
    }
    interface arraylist{
        [index:number]:number
    }

    const list:arraylist=[1,2,3,4,5,6,7];

    // interface and array  of object list

    interface  studentList<T>{
        [index:number]:T
    }
    type studentType={
        id:number;
        name:string;
         email:string;
         address:{
        presentAddress:string;
        permanentAddress:string;
    };
     gender: 'male' | 'female';}
    const student:studentList<studentType>=[{id:1,name:'sohel rana',email:'amsr2345@gmail.com',address:{
    permanentAddress:'Thakurgoan',
    presentAddress:'Dhaka'
},gender:'male'},
{id:2,name:'sohel rana',email:'amsr2345@gmail.com',address:{
    permanentAddress:'Thakurgoan',
    presentAddress:'Dhaka'
},gender:'male'},
{id:3,name:'sohel rana',email:'amsr2345@gmail.com',address:{
    permanentAddress:'Thakurgoan',
    presentAddress:'Dhaka'
},gender:'male'}


];
console.log(student);

//interfaace with Number secleration process

interface Add{
    (number1:number , number2:number):number
}

const add:Add=(number1,number2)=>number1 + number2;

console.log(add(10, 20) as number);

}