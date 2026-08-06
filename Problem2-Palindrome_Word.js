function palindrome(){
    const Str = "Racecar";
    let reverseStr = "";

    for(let i= Str.length-1; i>=0; i--){
        reverseStr = reverseStr+Str[i];
        //console.log(reverseStr);
    }

    console.log(reverseStr);

    if(Str.toLowerCase() === reverseStr.toLowerCase()){
        console.log("Yes it is Palindrome");
    }
    else{
        console.log("No it is not Palindrome");
    }
}

palindrome();