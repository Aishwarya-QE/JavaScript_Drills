function ReverseString(){
    const Str = "Playwright";
    let reverseStr = "";

    for(let i=Str.length-1; i>=0; i--){
        reverseStr = reverseStr+Str[i];
    }

    console.log("Reversed String:", reverseStr);
}

ReverseString();

function shortMethod(){
    const Str = "Playwright";
    const reversed = [...Str].reverse().join("");
    console.log("Shorter Reversed String is:" , reversed);
}

shortMethod();