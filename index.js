let passwordElements = document.querySelectorAll(".password-box");

function fetchPasswords() {
  for (let i = 0; i < passwordElements.length; i++) {
    passwordElements[i].value = generatePassword();
  }

  // passwordBox.classList.remove("has-dots");
}

function generatePassword() {
  let characters = [];

  // Add all ASCII characters to character array.
  for (let i = 32; i < 127; i++) {
    characters.push(String.fromCharCode(i));
  }

  return "password";
}
