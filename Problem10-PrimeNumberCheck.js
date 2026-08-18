function PrimeNumber(){
    let number = 20;
    let isPrime = true;

    for(let i = 2; i< number; i++){
        if(number%i === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime === true){
        console.log(number, "Prime Number");
    }
    else{
        console.log(number, isPrime);
    }
}

PrimeNumber();