{
    //conditional Type

    type a1='';
    type b1=undefined;
    type result=a1 extends null?true:false;
type result1=a1 extends null?true : b1 extends undefined?'value':'nothing';

// richkid
type richkid={
    car:string;
    plan:string;
    cycle:string;
}

type checkedType<T>= T extends keyof richkid?true:false;
type result2=checkedType<'car'>





   

}