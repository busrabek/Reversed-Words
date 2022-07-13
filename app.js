// const input = document.getElementById("input-string");
// const input = document.querySelector(".display");
// const input = document.querySelector("p");


function reverseLetters(string) {
    console.log("Entering value:", string);

    //if it is not space between quotes, reverse the letters in the sentence.
    var splittedString = string.split(""); 
    console.log(splittedString);

    var reversedArray = splittedString.reverse();
    console.log(reversedArray);

    var joinedArray = reversedArray.join(" ");
    console.log(joinedArray);

    document.querySelector("#display-letters").innerText = joinedArray;
    
}



function reverseWords(string) {
    console.log("Entering value:", string);

    //if it is not space between quotes, reverse the words in the sentence.
    var splittedString = string.split(" "); 
    console.log(splittedString);

    var reversedArray = splittedString.reverse();
    console.log(reversedArray);

    var joinedArray = reversedArray.join(" ");
    console.log(joinedArray);

    document.querySelector("#display-words").innerText = joinedArray;
    
}


const input = document.querySelector("#input-string");
const button = document.querySelector("#submit-button");


button.addEventListener("click", button => {
    reverseLetters(input.value)
});

button.addEventListener("click", button => {
    reverseWords(input.value)
});