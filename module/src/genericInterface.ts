{
    //generic Interface
    interface Developer<T,P=null>{
        name:string;
        email:string;
        phoneNumber:string;
        bloodGroup: 'o+' | 'a+' |'a-' | 'b+' |'b-' | 'ab+' |'ab-' | 'o-' ;
        gender: 'male' |'female';
        deviceDetails:T;
        bikedeatis?:P;
    }
    interface deviceType{
        model:string;
        releceYear:number;
        barnd:string
    }
    type bikeTypes={
        name:string;
        model:string;
        verson?:string;
        relaceDate:number
    }

    const poordeveloperDetails:Developer<deviceType,bikeTypes>={
        name:'sohel Rana',
        email:'amsr215019@gmail.com',
        phoneNumber:'01722305054',
        bloodGroup:'a+',
        gender:'male',
        deviceDetails:{
            model:'dell',
            releceYear:2016,
            barnd:'asd874125'
        }
        

    }


    //rice developer
    const reachdeveloperDetails:Developer<deviceType,bikeTypes>={
        name:'Ali Rahman',
        email:'amsr215019@gmail.com',
        phoneNumber:'01722305054',
        bloodGroup:'a+',
        gender:'male',
        deviceDetails:{
            model:'dell',
            releceYear:2016,
            barnd:'asd874125'
        },
        bikedeatis:{
            name:'Yahamaha',
            model:'isure',
            relaceDate:2016

        }
        

    }

    console.log(poordeveloperDetails);
    console.log(reachdeveloperDetails);



}