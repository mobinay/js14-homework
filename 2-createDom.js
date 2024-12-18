//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
//todo3. Get each of the paragraph using document.querySelector(#id)
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
//todo5. Loop through the nodeList and get the text content of each paragraph
//todo6. Set a text content to the fourth paragraph
//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

const firstParagraph = document.querySelector('p');
console.log('First paragraph:', firstParagraph.textContent);

const para1 = document.querySelector('#para1');
const para2 = document.querySelector('#para2');
const para3 = document.querySelector('#para3');
const para4 = document.querySelector('#para4');
console.log('Paragraph 1:', para1.textContent);
console.log('Paragraph 2:', para2.textContent);
console.log('Paragraph 3:', para3.textContent);
console.log('Paragraph 4:', para4.textContent);

const allParagraphs = document.querySelectorAll('p');
console.log('All paragraphs as NodeList:', allParagraphs);

allParagraphs.forEach((paragraph, index) => {
    console.log(`Paragraph ${index + 1} text:`, paragraph.textContent);
});

para4.textContent = 'This is updated text for the fourth paragraph.';
console.log('Updated fourth paragraph:', para4.textContent);

allParagraphs.forEach((paragraph, index) => {
    paragraph.id = `paragraph-${index + 1}`;
    paragraph.className = `class-${index + 1}`;
});
console.log('Updated paragraphs with new id and class:', allParagraphs);

allParagraphs.forEach((paragraph, index) => {
    paragraph.style.color = `rgb(${50 * (index + 1)}, ${100 * (index + 1)}, ${150 * (index + 1)})`;
    paragraph.style.background = `rgba(${200 - 40 * index}, ${180 - 20 * index}, ${220 - 30 * index}, 0.5)`;
    paragraph.style.border = '1px solid black';
    paragraph.style.fontSize = `${14 + index * 2}px`;
    paragraph.style.fontFamily = 'Arial, sans-serif';
});

allParagraphs.forEach((paragraph, index) => {
    if (index === 0 || index === 2) {
        paragraph.style.color = 'green';
    } else if (index === 1 || index === 3) {
        paragraph.style.color = 'red';
    }
});
