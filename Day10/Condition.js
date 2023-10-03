//SWITCH CASE
let favLanguage = 3;
let LangName;

// favLanguage is EXPRESSION
switch (favLanguage) {
  case 1:
    LangName = "Java";
    break;
  case 2:
    LangName = "C"; // all the langName are "SCENARIOS"
    break;
  case 3:
    LangName = "JavaScript"; // The switch statement compares an expression against a set of
    break; // dft scenarios and executes code based on the matching cases
  case 4:
    LangName = "Go";
    break;
  case 5:
    LangName = "Python"; //executes when CASE == EXPRESSION
    break;
  default:
    LangName = "Unknown";
    break;
}
console.log("Your favorite language is " + LangName);
