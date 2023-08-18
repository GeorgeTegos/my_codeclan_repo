document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('new-item-form')
  form.addEventListener("submit", handleFormSubmit)

  const deleteButton = document.getElementById('delete-all')
  deleteButton.addEventListener('click', deleteAllFromDom)
})


const deleteAllFromDom = function(){
  // const getAll = document.querySelectorAll(".listed-item")
  const getAll = document.getElementById('reading-list')
  // while (getAll.firstChild){
  //   getAll.removeChild(getAll.lastChild)
  // }

  // while (getAll.firstChild){
  //   getAll.firstChild.remove()
  // }
  getAll.replaceChildren()
}


const handleFormSubmit = function(event){
  console.log(event)

  const addItemToPage = document.getElementById("reading-list")

  const newTitleItem = document.createElement("li")
  const newTitle = document.createElement("h3")
  newTitle.classList.add('listed-item')
  newTitle.textContent = event.target[0].value
  newTitleItem.appendChild(newTitle)

  const newAuthorItem = document.createElement('li')
  const newAuthor = document.createElement('h5')
  newAuthor.classList.add("listed-item")
  newAuthor.textContent = event.target[1].value
  newAuthorItem.appendChild(newAuthor)


  const newCategoryItem = document.createElement('li')
  const newCategory = document.createElement('h6')
  newCategory.classList.add("listed-item")
  newCategory.textContent=event.target[2].value
  newCategoryItem.appendChild(newCategory)





  addItemToPage.appendChild(newTitleItem)
  addItemToPage.appendChild(newAuthorItem)
  addItemToPage.appendChild(newCategoryItem)


  event.preventDefault();
  const form = document.getElementById('new-item-form').reset()
}
