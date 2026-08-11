function Intersection(){
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [3, 4, 5, 6, 7];

    let Intersection = arr1.filter(e => arr2.includes(e));
    console.log(Intersection);
}
Intersection();