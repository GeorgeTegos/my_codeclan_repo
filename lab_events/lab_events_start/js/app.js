document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('new-item-form')
  form.addEventListener("submit", handleFormSubmit)

})



const handleFormSubmit = function(event){
  console.log(event)

  const addItemToPage = document.getElementById("reading-list")

  const newTitleItem = document.createElement("li")
  const newTitle = document.createElement("h3")
  newTitle.textContent = event.target[0].value
  newTitleItem.appendChild(newTitle)

  const newAuthorItem = document.createElement('li')
  const newAuthor = document.createElement('h5')
  newAuthor.textContent = event.target[1].value
  newAuthorItem.appendChild(newAuthor)



  // const newCategoryItem = document.createElement('li')
  // const newCategory = createElement('h6')


  addItemToPage.appendChild(newTitleItem)
  addItemToPage.appendChild(newAuthorItem)




  event.preventDefault();
  const form = document.getElementById('new-item-form').reset()
}