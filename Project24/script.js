const userText = document.getElementById("inputText");
const characters = document.getElementById("char");
const totalWords = document.getElementById("words");

userText.addEventListener("input", function () {
  characters.innerHTML = userText.value.length + " Characters";
  totalWords.innerHTML = userText.value.trim().split(" ").length + " Words";
});
