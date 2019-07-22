function duplicateEncode(word){
  var string = "";
  var lowerCaseWord = word.toLowerCase();
  for (var i = 0; i < lowerCaseWord.length; i++) {
    if (lowerCaseWord.indexOf(lowerCaseWord[i]) === lowerCaseWord.lastIndexOf(lowerCaseWord[i])) {
      string += "(";
    } else {
      string += ")";
    }
  }
  return string;
}

duplicateEncode("din"); 
duplicateEncode("recede");
duplicateEncode("Success");
duplicateEncode("(( @");
