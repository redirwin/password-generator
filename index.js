let passwordElements = document.querySelectorAll(".password-box");
let asciiList = [];

function fetchPasswords() {
  getAsciiList();
  for (let i = 0; i < passwordElements.length; i++) {
    passwordElements[i].value = generatePassword(15);
  }

  asciiList = [];

  // passwordBox.classList.remove("has-dots");
}

function generatePassword(size) {
  let numberList = getRandomNumberList(size);
  console.log(numberList);

  let charList = [];

  for (let i = 0; i < size; i++) {
    charList.push(asciiList[numberList[i]]);
  }

  console.log(charList);

  return charList;
}

function getAsciiList() {
  // Add all valid ASCII characters to character array.
  for (let i = 33; i < 127; i++) {
    asciiList.push(String.fromCharCode(i));
  }
}

function getRandomNumberList(size) {
  let list = [];
  for (let i = 0; i < size; i++) {
    // Allow zero for array index 0
    list.push(Math.floor(Math.random() * asciiList.length));
  }
  return list;
}
