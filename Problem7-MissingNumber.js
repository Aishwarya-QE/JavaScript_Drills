function MissingNumber(){
    const arr = [1, 2, 3, 5, 6];
    let actualsum = 0;

    for(let e of arr){
        actualsum = actualsum + e;
    }

    console.log("Actual Sum is:" , actualsum);

    //Expected Number
    const n = Math.max(...arr);
    let expectedsum = n*(n+1)/2;
    console.log("Expected Sum", expectedsum);

    let MissingNumber = expectedsum-actualsum;
    console.log(MissingNumber);
}
MissingNumber();