// const input = document.getElementById("input-string");
// const input = document.querySelector(".display");
// const input = document.querySelector("p");


function reverseString(string) {
    console.log("Entering value:", string);

    var splittedString = string.split(" "); // tırnak içinde boşluk olursa kelimeleri ters çevirir, boşluk olmazsa kelimedeki harfleri ters çevirir. 
    console.log(splittedString);

    var reversedArray = splittedString.reverse();
    console.log(reversedArray);

    var joinedArray = reversedArray.join(" ");
    console.log(joinedArray);

    document.querySelector("#display-string").innerText = joinedArray;
    
}


const input = document.querySelector("#input-string");
const button = document.querySelector("#submit-button");


button.addEventListener("click", button => {
    reverseString(input.value)
});