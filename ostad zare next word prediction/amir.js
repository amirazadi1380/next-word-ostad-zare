
const text = "یک متن ساختگی در جهت تست برنامه خود";

/////////////////////////// جدا کردن متن با این تابع ////////////

const words = text.split(/\s+/);

const wordMap = {};

for (let i = 0; i < words.length - 1; i++) {
    const word = words[i];
    const nextWord = words[i + 1];
    if (!wordMap[word]) {
        wordMap[word] = [];
    }
    wordMap[word].push(nextWord);
}

function predictNextWord(word) {
    const nextWords = wordMap[word];
    if (!nextWords || nextWords.length === 0) {
        return "پیش بینی یافت نشد";
    }
    const randomIndex = Math.floor(Math.random() * nextWords.length);
    return nextWords[randomIndex];
}
 ///////////////////////// هنگام کلیک کردن روی دکمه تابع فراخوانی شود و کلمه اخر فرستاده شود ///////////

document.getElementById('btn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value.trim();
    const inputWords = inputText.split(/\s+/);
    const lastWord = inputWords[inputWords.length - 1];
    const predictedWord = predictNextWord(lastWord);
    document.getElementById('pishbini').innerText = `Next word: ${predictedWord}`;
});
