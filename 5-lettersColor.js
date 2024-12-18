/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/

const colors = ['red', 'aqua', 'orange', 'purple', 'lightgreen'];

const usertext = prompt('Enter a text:');

const wordDiv = document.getElementById('word');

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
usertext.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.color = getRandomColor();
    wordDiv.appendChild(span);
});
