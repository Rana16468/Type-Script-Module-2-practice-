{
    //Utility types

    //pickUnitity
    type Person={
        name:string;
        age:number;
        email?:string;
        contractNo:string;
    }

    type NameAge=Pick<Person,'name' | 'age'>;

    //Omit
    type Contract=Omit <Person,'name' | 'age'>
    // requirenes
    type Requird1= Required<Person>;
     //partial
     type pertila=Partial<Person>
     //readonly
     type readonly=Readonly<Person>;
     // importent record type

    //  type myobj={
    //     a:string;
    //     b:string;
    //     c:number;
    //  }
    type record= Record<string,string>
     const MyObj:record={
        a:'sohel',
        b:'rana',
        c:'Akbor'
    
     }
     console.log(MyObj);

    const EmptyObject:Record<string,unknown>={};
    

}