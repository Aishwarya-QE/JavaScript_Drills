function SortArray(){
    const nums = [42, 5, 18, 3, 91, 27];
    let asc = [...nums].sort((a,b) => a-b);

    console.log("Ascending:",  asc);

    let desc = [...nums].sort((a,b) => b-a);
    console.log("Descending:",  desc);
}
SortArray();
    