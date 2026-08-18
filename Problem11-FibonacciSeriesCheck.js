function FibonacciSeries(){
    const number = 8;
    let a = 0;
    let b = 1;

    for(let i = 0; i<=number; i++){
        console.log(a);
        let next = a+b;
        a=b;
        b=next;
    }
    
}

FibonacciSeries();