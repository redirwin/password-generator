let passwordElements = document.querySelectorAll(".password-box");
let asciiList = [];

function fetchPasswords() {
  buildAsciiList();

  for (let i = 0; i < passwordElements.length; i++) {
    passwordElements[i].classList.remove("has-dots");
    passwordElements[i].classList.add("has-password");
    passwordElements[i].value = generatePassword(10);
  }
  asciiList = [];
}

function generatePassword(size) {
  let numberList = getRandomNumberList(size);
  let password = "";

  for (let i = 0; i < size; i++) {
    password += asciiList[numberList[i]];
  }

  return password;
}

function buildAsciiList() {
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
