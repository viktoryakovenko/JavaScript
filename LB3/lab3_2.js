function getMiddle(str) {
    return str.substr((Math.ceil(str.length / 2) - 1), (2 - str.length % 2));
}

let word;

word = prompt("Enter the word, please");

while (word.trim() === "")
{
    alert("Wrong value!");
    word = prompt("Enter the correct word, please");
}

let middleOfWord = getMiddle(word);

if (middleOfWord.length % 2 == 0)
    if(middleOfWord[0] === middleOfWord[middleOfWord.length-1])
        alert("Middle characters are equal");
    else
        alert(middleOfWord);
else
    alert(middleOfWord);