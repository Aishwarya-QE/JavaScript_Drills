function moveZeroToEnd(){
    const arr = [0, 1, 0, 3, 12];
    let nonZero = arr.filter(e => e!=0);
    let Zero = arr.filter(e => e == 0);

    let combine = [...nonZero, ...Zero];

    console.log("Combined:", combine);
}
moveZeroToEnd();