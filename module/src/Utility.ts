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

    // mapping types
    type productInfo<T>={
        [key in keyof T]:T[key]
       
    }
    const product:productInfo<{name:string}>={name:'sohel'};
    console.log(product);
    //interface 
    type Vehicel ={
        cycle:string;
        car:string;
        ship:string
       }

    type productGeneric<T>=T extends keyof Vehicel?true:false;
    type checked=productGeneric<'car'>;

    //generic Fuction 


    const arrayGenericFun=<T extends {  productName:string;  productDiscription:string; productStock:number;}>(parma:T):T[]=>{
        return [parma]
    };
    interface productType
    {
        productName:string;
        productDiscription:string;
        productQuentity:number;
        productStock:number;
        shippingCharge:number;
        productPrice:number;
        images:{
            image1:string;
            image2:string;
            image3:string;
        }
        
    
    }
    const catagoriesList={productName:'dell',
        productDiscription:'the quick Bown fox',
        productQuentity:23,
        productStock:100,
        productPrice:250,
        shippingCharge:15,
        images:{
            image1:'',
            image2:'',
            image3:''
        }
    }

    const deviceCtagaroes1=arrayGenericFun<productType>(catagoriesList) as object;
    console.log( deviceCtagaroes1 );

    //promise
    type promiseType={
        name:string;
        age:number;
        gender:'male' | 'female';
        address:{
            presentAdd: string;
            parmanentAdd:string;

        };
        skills:string[]
    }

    const createPromise=async():Promise<promiseType>=>{
        return new Promise<promiseType>((resolve,reject)=>{
            const data:string='execution';
            if(data)
            {
                resolve({name:'Ali Mohammad',age:24,gender:'male',address:{
                    presentAdd:'Dhaka Sorkor',
                    parmanentAdd:'tkg'
                    
                },
                skills:['Node js','Type Script']
            });
            }
            else{
                reject('error 404');
            }

        });
    }

    createPromise().then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error?.message);
    })
  

  
    
    
    

}