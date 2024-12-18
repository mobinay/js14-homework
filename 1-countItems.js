//Count the number of <li> in the countItems.html file and show the results in console.
document.querySelector('input[type="button"]').addEventListener('click', function () {
    const listItems = document.querySelectorAll('ul li');
    const itemCount = listItems.length;
    console.log(`the number of items: ${itemCount}`);
});
