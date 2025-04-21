let countCaracters = document.getElementById("CountCaracters");
let countWord = document.getElementById("CountWord");
let countSentences = document.getElementById("CountSentences");
let inputText = document.getElementById("inputText");

inputText.addEventListener("input", function () {
  CountCharacters(), CountWords();
  CountSentences();
});

function CountCharacters() {
  let text = inputText.value;
  countCaracters.textContent = text.length === 0 ? "00" : text.length;
}

function CountWords() {
  let text = inputText.value;
  countWord.textContent =
    text.length === 0 ? "00" : text.trim().split(/\s+/).length;
}

function CountSentences() {
  let text = inputText.value;
  let sentences = text.trim().split(/[.!?]+/);
  let total = sentences.filter((sentence) => sentence.trim().length > 0).length;
  countSentences.textContent = total === 0 ? "00" : total;
}
