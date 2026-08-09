function LargestAndSmallest(){
    const nums = [42, 5, 18, 3, 91, 27];

    let asc = [...nums].sort((a,b) => a-b);
    console.log("Lowest", asc[0]);
    console.log("Highest", asc[asc.length-1]);

    console.log("nums:", nums);
    console.log("Highest", Math.max(...nums));
    console.log("Lowest", Math.min(...nums));
}
LargestAndSmallest();