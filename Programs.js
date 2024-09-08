// Question 21.
function addName(str) {
	if (str.startsWith('py')) {
		return str;
	} else {
		return 'py' + str;
	}
}
console.log(addName('thon'));
// Question 22.
let first = 'Aniket';
let second = first.slice(1);
console.log(second);
function getWord(letter1, num) {
	if (letter1 < 0 || num.length) {
		return 'invalid position';
	} else {
		return letter1.slice(0, num) + letter1.slice(num + 1);
	}
}
console.log(getWord('MichelStarc', 0));
// Question 23.
function getStr(Word) {
	if (Word.length === 1) {
		return Word;
	}
	const firstChar = Word[0];
	const lastChar = Word[Word.length - 1];
	const middelChar = Word.slice(1, -1);
	return lastChar + middelChar + firstChar;
}
console.log(getStr('Mahadev'));
//Question 24.
function takeCharecter(letters){
    if(letters === 0){
      throw new Error ('String length must be 1 or more.');
    }
    const fastChar = letters.charAt(0);
    return fastChar + letters + fastChar;
}
console.log(takeCharecter('Hello'));
// Question 25.
function getNum(element){
  if(element > 0){
    if((element % 3 === 0) || (element % 7 === 0)){
     return true;
    }else{
      return false;
    }
  }
};
console.log(getNum(15));
// Question 26.
function lastThree(letters1){
  if(letters1 < 3){
    throw new Error ('String length must be 0 or more')
  }
  const lastThreeChers = letters1.substring(letters1.length -3);
  return lastThreeChers + letters1 + lastThreeChers;
};
console.log(lastThree('tomorrow'))