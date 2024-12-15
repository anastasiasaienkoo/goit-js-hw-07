const ulListInfo = document.querySelector('#categories')
console.log(ulListInfo);

const liItem = ulListInfo.querySelectorAll('.item');
console.log(liItem);

console.log(`Numbers of categories: ${liItem.length}`)

liItem.forEach(elem => {
    const categorie = elem.querySelector('h2').textContent;
    const itemCount = elem.querySelectorAll('li').length;

    console.log(`Category: ${categorie}`);
    console.log(`Elements: ${itemCount}`);
});





