
const NumberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${NumberOfCategories.length}`);

const CategoryAllElements = document.querySelectorAll(".item");
NumberOfCategories.forEach((title) => {
  console.log(`Category: ${title.firstElementChild.textContent}
Elements: ${title.lastElementChild.childElementCount}`);
});
