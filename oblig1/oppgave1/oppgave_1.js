//static text for this task

const text =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus risus ligula, ut volutpat leo scelerisque ac. Vivamus id libero tincidunt, pharetra sapien et, ultricies mauris. Nam aliquam scelerisque maximus. Phasellus ut iaculis augue.";

const longestWord = ()=>{
    //spilting the words on å space and added to å array
    const words = text.split(" ");

    //refrence to the array with the words
    let firstWord = words[0];

    //itereting words array
    for(let i = 0; i < words.length -1; i++){
        if(firstWord.length < words[i + 1].length){
            firstWord = words[i + 1];
        }
    }
    return firstWord;
};

//wirthing the longest word to the terminal
console.log(longestWord());