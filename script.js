// Array of Numbers
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Array of Capital letters
const capitalLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Array of lowercase letters
const lowercaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of special characters
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function getPasswordOptions() {
  const passwordLength = parseInt(
    document.querySelector("#password-length").value,
    10
  );
  const uppercaseChoice = document.querySelector("#uppercase-choice").checked;
  const lowercaseChoice = document.querySelector("#lowercase-choice").checked;
  const numberChoice = document.querySelector("#number-choice").checked;
  const specialCharChoice = document.querySelector(
    "#special-char-choice"
  ).checked;

  if (passwordLength >= 8 && passwordLength <= 128) {
    if (
      uppercaseChoice ||
      lowercaseChoice ||
      numberChoice ||
      specialCharChoice
    ) {
      return {
        passwordLength,
        uppercaseChoice,
        lowercaseChoice,
        numberChoice,
        specialCharChoice,
      };
    } else {
      alert("You must include at least one of the given options.");
      return null;
    }
  } else {
    alert(
      "Password length must be more than 8 characters long and no longer than 128 characters."
    );
    return null;
  }
}

function generatePassword(options) {
  let validChars = "";
  let passwordOptions = "";

  if (options.uppercaseChoice) validChars += capitalLetters.join("");
  if (options.lowercaseChoice) validChars += lowercaseLetters.join("");
  if (options.numberChoice) validChars += numbers.join("");
  if (options.specialCharChoice) validChars += specialCharacters.join("");

  const validCharsLength = validChars.length;

  for (let i = 0; i < options.passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * validCharsLength);
    passwordOptions += validChars[randomIndex];
  }

  return passwordOptions;
}

function writePassword() {
  const options = getPasswordOptions();
  if (!options) return;

  const password = generatePassword(options);
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}
