function RemoveDuplicates(){
    const str = "aaabbccdd";

    let removedduplicate = new Set([...str]);
    console.log(removedduplicate);
}

RemoveDuplicates();