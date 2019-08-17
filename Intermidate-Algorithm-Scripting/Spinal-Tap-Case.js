function spinalCase(str) {
    const reqularEpressionForSpaceAndUnderScoreAndUpperCaseLetters = /\s|_|(?=[A-Z])/;
    return str.split(reqularEpressionForSpaceAndUnderScoreAndUpperCaseLetters).join('-').toLowerCase()
}
//Examples:
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));