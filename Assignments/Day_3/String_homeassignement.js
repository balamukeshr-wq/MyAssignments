
const stringAssign = (s) => {
    let str = s.trim() // trims the word
    let words = str.split(" ");// split string  into array of words
    console.log(words)
    let lastWord = words[words.length - 1];//chooses the last word

    console.log("the last word is ", lastWord);// prints last word
    console.log("the lenght of the word is ", lastWord.length);//prints lenght of last word
}
//const s = "Hello World"; //given 1st string
const s = "fly me to the moon"; //given 2nd string
stringAssign(s)

const anagramWords = (s1, s2) => {

    s1 = s1.toLowerCase();         //switching to lowercase
    s2 = s2.toLowerCase();         //switching to lowercase

    let anagram1 = s1.split("").sort().join(""); //first split is done, then string is sorted and joined
    let anagram2 = s2.split("").sort().join(""); // repeated for 2nd string

    if (anagram1 === anagram2) { //compares both strings
        return true;
    } else {
        return false;
    }
};

const s1 = "Listen";
const s2 = "Silent";

console.log(anagramWords(s1, s2));  //types the result