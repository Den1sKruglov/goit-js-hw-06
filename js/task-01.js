const numberOfCategories = document.querySelectorAll('li.item');
console.log('Number of categories:', numberOfCategories.length);

numberOfCategories.forEach(element => {
   const titleCategory = element.querySelector('h2').textContent;
   const numberOfCategory = element.querySelectorAll('li');

   console.log('Category:', titleCategory);
   console.log('Elements:', numberOfCategory.length);
});