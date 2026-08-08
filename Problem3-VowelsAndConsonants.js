function Vowel(){
    const str = "Aishwarya";
    let Vowels = 0;
    let consonants = 0;
    for(let e of str){
        if("aeiou".includes(e.toLowerCase())){
            Vowels = Vowels + 1;
        }
        else if(e !== " "){
            consonants = consonants + 1;
        }
       
    }

     console.log("VowelCount:" , Vowels);
     console.log("ConsonantCount:", consonants);
}

Vowel();