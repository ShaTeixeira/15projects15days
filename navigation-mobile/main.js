const contentsImages = document.querySelectorAll('.content');
const listItemsImages = document.querySelectorAll('nav ul li');

listItemsImages.forEach((item, id) => {
    item.addEventListener('click', () => {
        hideAllContents();
        hideAllItems();

        item.classList.add('active');
        contentsImages[id].classList.add('show');
    })
})

function hideAllContents() {
    contentsImages.forEach(
        content => content
            .classList
            .remove('show')
    );
}
function hideAllItems() {
    listItemsImages.forEach(
        item => item
            .classList
            .remove('active')
    );
}