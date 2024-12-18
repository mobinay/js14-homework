//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second
//todo2: Completed challenge has background green
//todo3: Ongoing challenge has background yellow
//todo4: Coming challenges have background red
// Task 1: Color of the year text in h1 (2020) is changing every 1 second

const yearText = document.querySelector('h1'); 
let yearTextColors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
let yearTextIndex = 0;


const listItems = document.querySelectorAll('ul li');

listItems.forEach(item => {
    if (item.textContent.includes('Done')) {
        item.style.backgroundColor = 'green'; 
    } else if (item.textContent.includes('Ongoing')) {
        item.style.backgroundColor = 'yellow'; 
    } else if (item.textContent.includes('Coming')) {
        item.style.backgroundColor = 'red'; 
    }
});
